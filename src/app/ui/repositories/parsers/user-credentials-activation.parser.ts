import { UserCredentials } from '../../models/domains/credentials/user-credentials.model';
import { AbstractParser } from './parser';

export class UserCredentialsActivationParser extends AbstractParser<UserCredentials> {
    parse(payload: any): UserCredentials {

        const userCredentials = new UserCredentials();
        userCredentials.setActionNameConfirmation(payload.ActionNameConfirmation);
        userCredentials.setUserId(payload.UserId);
        return userCredentials;
    }

}
