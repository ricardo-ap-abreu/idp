import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/ui/services/navigation.service';
import { RoutePath } from 'src/app/ui/models/domains/route-paths.model';
import {Item} from '../../../models/domains/item/item';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.page.html',
  styleUrls: ['./home-details.page.scss'],
})
export class HomeDetailsPage implements OnInit {

  subHeader: string;
  content: string;
  items: {label: string, message: string | number}[];

  constructor(
    private navService: NavigationService) { }

  ngOnInit() {

    const item: Item = this.navService.get(RoutePath.HomeDetails);

    if (!item) {
      return;
    }

    this.subHeader = `ID: ${item.id}`;

    this.items = [
      {
        label: 'ID',
        message: item.id
      },
      {
        label: 'VALUE',
        message: item.value
      },
    ];

  }

}
