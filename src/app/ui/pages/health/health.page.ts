import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../../services/loading.service';
import {HealthService} from '../../services/health.service';
import {HealthItem} from '../../models/domains/health/health-item.model';
import {HealthStatus} from '../../models/domains/health/health-status';
import {AlertService} from '../../services/alert.service';
import {AlertMessage} from '../../models/domains/alert-message/alert-message';
import {AlertMessageService} from '../../services/alert-message.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  alertMessage: AlertMessage;
  healthItems: HealthItem[] = [];

  constructor(
    private loadingService: LoadingService,
    private healthService: HealthService,
    private alertService: AlertService,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() {
    this.callHeathService();
  }

  callHeathService() {

    this.alertMessage = this.alertMessageService.clear();
    this.loadingService.show();

    this.healthService.getItems().then((items: HealthItem[]) => {
      this.healthItems = items;

      if (items.length === 0) {
        this.alertMessage = this.alertMessageService.info('Nenhum resultado encontrado.', false, () => {
          this.callHeathService();
        });
      }

    })
    .catch(error => {
      this.alertMessage = this.alertMessageService.error(error.message, false, () => this.callHeathService());
    })
    .finally(() => {
      this.loadingService.close();
    });

  }

  openAlert(error: string) {
    this.alertService.presentAlert('Detalhes', error);
  }

  getStatusIconClass(status: HealthStatus) {
    return `status ${status}`;
  }

}
