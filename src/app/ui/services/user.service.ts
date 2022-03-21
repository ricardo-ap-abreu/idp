import { Injectable } from '@angular/core';
import { EmailAddress } from '../models/domains/email/email-address';
import { UserRepository } from '../repositories/user.repository';
import { ResetPasswordRepository } from '../repositories/reset-password.repository';
import { UserCredentials } from '../models/domains/credentials/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private userRepository: UserRepository,
    private resetPasswordRepository: ResetPasswordRepository
  ) { }

  public async validateUserActivationToken(token: string): Promise<UserCredentials> {
    try {
      let activeUser = this.getUserCredentialsFirstAccess(token);
      let validToken = Promise.resolve(await this.userRepository.activateUser(activeUser));
      if (validToken) {
        return validToken;
      }
      else {
        return null;
      }
    }
    catch (error) {
      return await Promise.reject(error);
    }
  }

  public getUserCredentialsFirstAccess(token: string): UserCredentials {
    try {
      if (token.length % 4 > 0) {
        return null;
      }
      var params = atob(token);
      params = JSON.parse(params);
      var userId = params['UserId'];
      let userCredentials = new UserCredentials();
      userCredentials.setActionNameConfirmation(params['ActionNameConfirmation']);
      userCredentials.setToken(token);
      userCredentials.setUserId(userId);
      return userCredentials;
    }
    catch (error) {
      return null;
    }
  }

  public async changePasswordFirstAccess(password: string, token: string, userId: string): Promise<boolean> {
    try {
      let userCredentials = new UserCredentials();
      userCredentials.userId = userId;
      userCredentials.token = token;
      userCredentials.password = password;
      return Promise.resolve(await this.userRepository.changePasswordFirstAccess(password, userCredentials));
    }
    catch (error) {
      return await Promise.reject(error);
    }
  }

  public async sendEmailForgotPassword(email: EmailAddress): Promise<any> {
    try {
      return Promise.resolve(await this.userRepository.sendEmailForgotPassword(email));
    }
    catch (error) {
      return await Promise.reject(error);
    }
  }

  public async resetPassword(password: string, token: string): Promise<boolean> {
    try {
      let userCredentials = this.isTokenValid(token);
      return Promise.resolve(await this.resetPasswordRepository.resetPassword(password, userCredentials));
    }
    catch (error) {
      return await Promise.reject(error);
    }
  }

  public async changePassword(currentPassword: string, newPassword: string, confirmPassword: string): Promise<void> {
    try {
      await this.userRepository.changePassword(currentPassword, newPassword, confirmPassword);
      return Promise.resolve();
    }
    catch (error) {
      return await Promise.reject(error);
    }
  }

  public isTokenValid(token: string): UserCredentials {
    try {
      if (token.length % 4 > 0) {
        return null;
      }
      var params = atob(token);
      params = JSON.parse(params);
      var userId = params['UserId'];
      if (!userId || !this.isGuidValid(userId)) {
        throw 'Invalid user id';
      }
      var resetToken = params['Token'];
      if (!resetToken) {
        throw 'Invalid reset token';
      }
      let userCredentials = new UserCredentials();
      userCredentials.setUserId(userId);
      userCredentials.setToken(resetToken);
      return userCredentials;
    } catch (error) {
      return null;
    }
  }

  private isGuidValid(guid: string): boolean {
    let guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    return guidRegex.test(guid);
  }
}
