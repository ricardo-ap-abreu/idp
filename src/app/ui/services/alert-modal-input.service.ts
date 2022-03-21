import {Injectable} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AlertModalInputComponent} from '../components/alert-modal-input/alert-modal-input.component';
import {AlertModalInput} from '../models/domains/alert-modal-input/alert-modal-input';
import {AlertMessage, AlertType} from '../models/domains/alert-message/alert-message';

@Injectable({
    providedIn: 'root'
  })
export class AlertModalInputService {

  private alert: HTMLIonModalElement;

  constructor(
    private modalController: ModalController) {}

  async show(componentProps: AlertModalInput) {

    this.alert = await this.modalController.create({
      component: AlertModalInputComponent,
      componentProps: { data: componentProps }
    });

    await this.alert.present();

  }

  presentErrorAlert(text: string) {

    AlertModalInputComponent.alertMessage = new AlertMessage({
      type: AlertType.Error,
      message: text,
    });

  }

  close() {
    this.alert.dismiss();
  }

}
