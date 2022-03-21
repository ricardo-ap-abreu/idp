import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: HTMLIonModalElement[] = [];

  constructor(private modalController: ModalController){}

  async show(component: any, componentProps: {[key: string]: any} = {}, onDismiss: (res: any) => void = () => {}) {

    const modal = await this.modalController.create({
      component,
      componentProps
    });

    await modal.present();

    modal.onDidDismiss().then(res => onDismiss(res));

    this.modals.push(modal);

  }

  dismiss(componentProps: any = null) {
    if(this.modals.length > 0) {
      const lastModal = this.modals.pop();
      lastModal.dismiss(componentProps);
    }
  }

  dismissAll() {
    this.modals.forEach(modal => modal.dismiss());
    this.modals = []
  }

}

