import { Component, Input} from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() headerTitle: string;
  @Input() headerSubTitle: string;
  @Input() headerRightIcon: string;
  @Input() headerRightOnPress: () => void;
  @Input() hasBack: boolean;
  @Input() hasVersionLogo: boolean;

  constructor(private navCtrl: NavController) {}

  getAppName(): string {
    return environment.appName;
  }

  getVersion(): string {
    return `v${environment.version}`;
  }

  back(): void {
    this.navCtrl.pop();
  }

}
