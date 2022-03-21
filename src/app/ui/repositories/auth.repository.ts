import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {UserCredentials} from '../models/domains/credentials/user-credentials.model';
import {ScsAuthorizationTokenParser} from './parsers/scs-authorizatio-token.parser';
import {RemoteGatewayFactory} from '../gateways/remote-gateway-factory';
import {UserCredentialsParser} from './parsers/user-credentials.parser';
import {AuthUrl} from '../models/domains/urls/auth.url';
import {AuthUserTokenValidationUrl} from '../models/domains/urls/auth-user-token-validation.url';
import {AuthServiceTokenValidationUrl} from '../models/domains/urls/auth-service-token-validation.utl';

@Injectable()
export class AuthRepository {

    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory,
        private scsAuthorizationTokenParser: ScsAuthorizationTokenParser,
        private userCredentialsParser: UserCredentialsParser) {
    }

    async login(username: string, password: string): Promise<UserCredentials> {
        const body = new HttpParams()
          .set('client_id', environment.authClientId.toString())
          .set('username', username)
          .set('password', password)
          .set('grant_type', 'password');

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

      try {
        const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
        const data: any = await remoteGateway.postWithHeaders(new AuthUrl('/token'), body.toString(), headers);
        return Promise.resolve(this.userCredentialsParser.parse(data));
      } catch (error) {
        return await Promise.reject(error);
      }
    }

    async validateUserToken(token: string): Promise<boolean> {
        const headers = {
            'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        };
      try {
        const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
        const data = await remoteGateway.getWithHeaders(new AuthUserTokenValidationUrl('/Authorization/test'), headers);
        return this.scsAuthorizationTokenParser.parse(data);
      } catch (error) {
        return await Promise.reject(error);
      }
    }

    async refreshUserToken(refreshToken: string): Promise<UserCredentials> {
      const body = new HttpParams()
      .set('client_id', environment.authClientId.toString())
      .set('refresh_token', refreshToken)
      .set('grant_type', 'refresh_token');

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      try {
        const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
        const data = await remoteGateway.postWithHeaders(new AuthUrl('/Token'), body.toString(), headers);
        return Promise.resolve(this.userCredentialsParser.parse(data));
      }
      catch (error){
        return await Promise.reject(error);
      }
    }

    async validateServiceToken(token: string): Promise<boolean> {
        const headers = {
            'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        };
      try {
        const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
        const data = await remoteGateway.getWithHeaders(new AuthServiceTokenValidationUrl('/Authorization/verify'), headers);
        return this.scsAuthorizationTokenParser.parse(data);
      } catch (error) {
        return await Promise.reject(error);
      }
    }

    async switchContext(userId: string, refreshToken: string, sourceApplicationId: string): Promise<UserCredentials> {
      try {
        const body = {
          userId,
          refreshToken,
          sourceApplicationId,
          targetApplicationId: environment.authClientId
        };
        const gateway = this.remoteGatewayFactory.createAuthRemoteGateway();
        const data = await gateway.post('/api/switchcontext', body);
        return Promise.resolve(this.userCredentialsParser.parse(data));
      } catch (error) {
        return await Promise.reject(error);
      }
    }
}
