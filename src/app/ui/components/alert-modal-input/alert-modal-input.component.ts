import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AlertModalInput} from '../../models/domains/alert-modal-input/alert-modal-input';
import {AlertMessage} from '../../models/domains/alert-message/alert-message';

@Component({
  selector: 'app-alert-modal-input',
  templateUrl: './alert-modal-input.component.html',
  styleUrls: ['./alert-modal-input.component.scss'],
})
export class AlertModalInputComponent implements OnInit {
  static alertMessage: AlertMessage;
  data: AlertModalInput;

  constructor(
    private navParam: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.data = this.navParam.get('data');
    AlertModalInputComponent.alertMessage = null;
  }

  getAlert() {
    return AlertModalInputComponent.alertMessage;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
