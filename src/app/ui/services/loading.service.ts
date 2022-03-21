import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';


@Injectable()
export class LoadingService {

  private hasLoading: boolean;
  private loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {
  }

  async show(message: string = 'Carregando...') {

    if (!this.hasLoading) {

      this.hasLoading = true;

      this.loading = await this.loadingController.create({
        message
      });

      await this.loading.present();

    }

  }

  async close() {
    await this.loading.dismiss();
    this.hasLoading = false;
  }

}
