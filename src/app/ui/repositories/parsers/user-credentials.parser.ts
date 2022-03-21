import { Injectable } from '@angular/core';
import { AbstractParser } from './parser';
import { UserCredentials } from '../../models/domains/credentials/user-credentials.model';

@Injectable()
export class UserCredentialsParser extends AbstractParser<UserCredentials> {
    parse(payload: any): UserCredentials {
        const userCredential = new UserCredentials();
        userCredential.setUserName(payload.Username);
        userCredential.setUserId(payload.UserId);
        userCredential.setToken(payload.access_token);
        userCredential.setRefreshToken(payload.refresh_token);
        return userCredential;
    }
}
