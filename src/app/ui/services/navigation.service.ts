import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  static pagesData: object[] = [];

  constructor(private navCtrl: NavController, private router: Router) {}

  push(path: string, data: object = null) {
    NavigationService.pagesData[path] = data;
    this.navCtrl.navigateForward(path);
  }

  pop(path: string = null) {
    if (path) {
      this.navCtrl.navigateBack(path);
    } else {
      this.navCtrl.back();
    }
  }

  navigate(path: string, data: object = null) {
    NavigationService.pagesData[path] = data;
    this.navCtrl.navigateRoot(path);
  }

  get(path: string) {
    return NavigationService.pagesData[path];
  }

}
