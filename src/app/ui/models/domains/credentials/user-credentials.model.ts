import { ICredentials } from './credentials.model';

export class UserCredentials implements ICredentials {
  
  private actionNameConfirmation: string;
  private email: string;
  
  userName: string;
  password: string;
  userId: string;
  token: string;
  resfreshToken: string;

  getActionNameConfirmation(): string {
    return this.actionNameConfirmation;
  }

  getEmail(): string {
    return this.email;
  }

  setActionNameConfirmation(actionNameConfirmation: string): void {
    this.actionNameConfirmation = actionNameConfirmation;
  }

  setEmail(email: string): void {
    this.email = email;
  }
  
  setUserName(userName: string): void {
    this.userName = userName;
  }
  
  setPassword(password: string): void {
    this.password = password;
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }

  setToken(token: string) {
    this.token = token;
  }

  setRefreshToken(refreshToken: string): void {
    this.resfreshToken = refreshToken;
  }

  getRefreshToken(): string {
    return this.resfreshToken;
  }

}

