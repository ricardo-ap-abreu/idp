import { Injectable } from '@angular/core';
import { AppContext } from '../contexts/app-context';
import { UserCredentials } from '../models/domains/credentials/user-credentials.model';
import { AuthRepository } from '../repositories/auth.repository';
import { UserOptions } from '../models/domains/options/user-options-model';

@Injectable()
export class AuthService {

  constructor(
    private authRepository: AuthRepository,
    private appContext: AppContext
  ) {
  }

  public async authenticate(userCredentials: UserCredentials, userOptions: UserOptions): Promise<UserCredentials> {
    try {
      userCredentials = await this.authRepository.login(userCredentials.userName, userCredentials.password);
      this.appContext.setUserCredential(userCredentials);
      this.appContext.setUserOption(userOptions);
      return Promise.resolve(userCredentials);
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  public async reauthenticate(): Promise<UserCredentials> {
    const credential = this.appContext.getUserCredential();

    try {
      const userCredentials = await this.authRepository.refreshUserToken(credential.resfreshToken);
      this.appContext.setUserCredential(userCredentials);
      return Promise.resolve(userCredentials);
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  logout(): void {
    this.appContext.clearUserCredential();
    this.appContext.clearServiceCredential();
  }

  async isAuthenticated(): Promise<boolean> {
    const credential = this.appContext.getUserCredential();
    if (credential && credential.token) {
      return await this.authRepository.validateUserToken(credential.token);
    }
    return false;
  }

  async isServiceTokenvValid(token: string): Promise<boolean> {
    if (token) {
      return await this.authRepository.validateServiceToken(token);
    }
    return false;
  }

  public isUserLogged(): boolean {
    const userCredentials = this.appContext.getUserCredential();
    return !!userCredentials && !!userCredentials.token;
  }

  public isServiceLogged(): boolean {
    const serviceCredentials = this.appContext.getServiceCredential();
    return !!serviceCredentials && !!serviceCredentials.token;
  }
  public async switchContext(switchContextHash: string): Promise<UserCredentials> {
    try {
      const hash = JSON.parse(atob(switchContextHash));
      const userCredentials = await this.authRepository.switchContext(hash.UserId, hash.RefreshToken, hash.SourceApplicationId);
      this.appContext.setUserCredential(userCredentials);
      return Promise.resolve(userCredentials);
    } catch (error) {
      return await Promise.reject(error);
    }
  }
}
