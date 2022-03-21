import {Injectable} from '@angular/core';
import {UserCredentials} from '../models/domains/credentials/user-credentials.model';
import {AbstractParser} from '../repositories/parsers/parser';
import {environment} from '../../../environments/environment';
import {ServiceCredentials} from '../models/domains/credentials/service-credentials.model';
import {UserOptions} from '../models/domains/options/user-options-model';

const USER_CREDENTIAL_KEY = `user-credential-${environment.appName}`;
const USER_OPTION_KEY = `user-option-${environment.appName}`;
const SERVICE_CREDENTIAL_KEY = 'service-credential';

@Injectable()
export class AppContext {
  private userCredential: StorageEntry<UserCredentials>;
  private userOption: StorageEntry<UserOptions>;
  private serviceCredential: StorageEntry<ServiceCredentials>;

  constructor() {
        this.userCredential = new LocalStorageEntry<UserCredentials>(
            USER_CREDENTIAL_KEY
        );
        this.userOption = new LocalStorageEntry<UserOptions>(
            USER_OPTION_KEY
        );
        this.serviceCredential = new LocalStorageEntry<ServiceCredentials>(
            SERVICE_CREDENTIAL_KEY
        );
    }

    public getBackendUrl(): string {
        return environment.backendUrl;
    }

    public setUserCredential(credential: UserCredentials) {
        this.userCredential.set(credential);
    }

    public setUserOption(option: UserOptions) {
        this.userOption.set(option);
    }

    public setServiceCredential(credential: ServiceCredentials) {
        this.serviceCredential.set(credential);
    }

    public getUserCredential(): UserCredentials | null {
        return this.userCredential.get();
    }

    public getUserOption(): UserOptions | null {
        const userOptionsStorage = this.userOption.get();
        const userOption = new UserOptions();
        userOption.setRemember(userOptionsStorage.remember);
        return userOption;
    }

    public getServiceCredential(): ServiceCredentials | null {
        return this.serviceCredential.get();
    }

    public clearUserCredential() {
        this.userCredential.remove();
    }

    public clearServiceCredential() {
        this.serviceCredential.remove();
    }
}

abstract class StorageEntry<T> {
    protected constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null,
        private storage: Storage
    ) { }

    protected parse(entity): T | null {
        return this.parser.parse(entity);
    }

    get(): T | null {
        const entity = this.storage.getItem(this.key);
        if (entity) {
            const entityJson = JSON.parse(entity);
            if (this.parser) {
                return Array.isArray(entityJson)
                    ? this.parser.parseList(entityJson)
                    : this.parser.parse(entityJson);
            }
            return entityJson;
        }
        return null;
    }

    set(item: T) {
        this.storage.setItem(this.key, JSON.stringify(item));
    }

    remove() {
        this.storage.removeItem(this.key);
    }
}

export class LocalStorageEntry<T> extends StorageEntry<T> {
    constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, localStorage);
    }
}

class SessionStorageEntry<T> extends StorageEntry<T> {
    constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, sessionStorage);
    }
}
