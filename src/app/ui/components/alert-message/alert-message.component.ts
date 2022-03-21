import {Component, Input} from '@angular/core';
import {AlertMessage, AlertType} from '../../models/domains/alert-message/alert-message';
import {AlertMessageService} from '../../services/alert-message.service';

@Component({
    selector: 'custom-alert-message',
    templateUrl: 'alert-message.component.html',
    styleUrls: ['./alert-message.component.scss']
})

export class AlertMessageComponent {

  constructor(private alertMessageService: AlertMessageService ) {}

  @Input() alert: AlertMessage;

  getClass(): string {

    const typesAlert = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-danger',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning',
    };

    return typesAlert[this.alert.type] || '';

  }

  closeAlert() {
    this.alert = this.alertMessageService.clear();
  }

}
