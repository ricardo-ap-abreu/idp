import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AlertMessage, AlertType} from '../models/domains/alert-message/alert-message';

@Injectable({
    providedIn: 'root'
  })
export class AlertMessageService {

  constructor() {}

  success(message: string, closeOption: boolean = true, onTryAgain: () => void | null = null): AlertMessage {
    return new AlertMessage({ message, type: AlertType.Success, closeOption, onTryAgain});
  }

  error(message: string, closeOption: boolean = true, onTryAgain: () => void | null = null): AlertMessage {
    return new AlertMessage({ message, type: AlertType.Error, closeOption, onTryAgain});
  }

  info(message: string, closeOption: boolean = true, onTryAgain: () => void | null = null): AlertMessage {
    return new AlertMessage({ message, type: AlertType.Info, closeOption, onTryAgain});
  }

  warn(message: string, closeOption: boolean = true, onTryAgain: () => void | null = null): AlertMessage {
    return new AlertMessage({ message, type: AlertType.Warning, closeOption, onTryAgain});
  }

  clear() {
    return null;
  }

}
