import { Injectable } from '@angular/core';
import { RemoteGatewayFactory } from '../gateways/remote-gateway-factory';
import { ForgotPasswordUrl } from '../models/domains/urls/forgot-password.url';
import { UserCredentials } from '../models/domains/credentials/user-credentials.model';

@Injectable()
export class ResetPasswordRepository {
    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory) {
    }
    
    async resetPassword(password: string, userCredentials: UserCredentials): Promise<boolean> {
        try {
            const headers = {
                'Content-Type': 'application/json'
            };
            const body = {
                UserId: userCredentials.userId,
                Token: userCredentials.token,
                NewPassword: password,
                NewPasswordConfirmation: password
            };
            const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
            await remoteGateway.postWithHeaders(new ForgotPasswordUrl('/api/Account/ForgotPasswordConfirmation'),body,headers);
            return true;
        }
        catch (error) {
            return await Promise.reject(error);
        }
    }
}