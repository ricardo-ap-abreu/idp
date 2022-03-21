import { Injectable } from '@angular/core';
import { EmailAddress } from '../models/domains/email/email-address';
import { RemoteGatewayFactory } from '../gateways/remote-gateway-factory';
import { ForgotPasswordUrl } from '../models/domains/urls/forgot-password.url';
import { environment } from 'src/environments/environment.prod';
import { UserCredentials } from '../models/domains/credentials/user-credentials.model';
import { UserCredentialsActivationParser } from './parsers/user-credentials-activation.parser';

@Injectable()
export class UserRepository {

    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory,
        private userCredentialActivationParser: UserCredentialsActivationParser) {
    }

    async sendEmailForgotPassword(email: EmailAddress): Promise<any> {
        const body = {
            Email: email.getAddress(),
            Url: environment.forgotPasswordConfirmationUrl,
            ApplicationId: environment.authClientId
        };

        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
            const data = await remoteGateway.postWithHeaders(new ForgotPasswordUrl('/api/Account/ForgotPasswordWithConfirmationUrl'), body, headers);
            return Promise.resolve(data);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    public async changePassword(currentPassword: string, newPassword: string, confirmPassword: string): Promise<void> {
        const body = {
            currentPassword,
            newPassword,
            confirmedPassword: confirmPassword
        };
        try {
            const gateway = this.remoteGatewayFactory.createAuthRemoteGateway();
            await gateway.post('/api/account/changepassword', body);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    public async changePasswordFirstAccess(password: string, userCredentials: UserCredentials): Promise<boolean> {
        let passwordChanged = false;
        const headers = {
            'Content-Type': 'application/json'
        };
        const body = {
            UserId: userCredentials.userId,
            Token: userCredentials.token,
            NewPassword: password,
            PasswordConfirmation: password
        };
        const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
        try {
            const data = await remoteGateway.postWithHeaders(new ForgotPasswordUrl('/api/Account/changepasswordfirstaccess'), body, headers)
                .then(value => {
                    return passwordChanged = true;
                });
        } catch (error) {
            return await Promise.reject(error);
        }
        return passwordChanged;
    }

    async activateUser(userCredentials: UserCredentials): Promise<UserCredentials> {
        try {
            const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
            const data = await remoteGateway.get(new ForgotPasswordUrl('/api/Account/RegisterConfirmation?param=' + userCredentials.token));
            return this.userCredentialActivationParser.parse(data);

        } catch (error) {
            return await Promise.reject(error);
        }
    }
}
