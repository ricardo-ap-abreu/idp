import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tabs: { path: string, icon: string, label: string }[];

  constructor() { }

  ngOnInit() {

    this.tabs = [
      {
        path: 'home',
        icon: 'home',
        label: 'Home'
      },
      {
        path: 'settings',
        icon: 'settings',
        label: 'Settings'
      }
    ];

  }

}
