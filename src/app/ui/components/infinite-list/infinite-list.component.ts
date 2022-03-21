import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import {IonContent, Platform} from '@ionic/angular';

@Component({
  selector: 'custom-infinite-list',
  templateUrl: './infinite-list.component.html',
  styleUrls: ['./infinite-list.component.scss'],
})
export class InfiniteListComponent implements AfterViewInit {

  @Input() content: IonContent;
  @Input() bottomReach: (event: any) => void;
  @Input() hasFab: boolean;
  bottomPosition = this.platform.is('ios') ? '70px' : '10px';
  isTop = true;

  constructor(private platform: Platform) { }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((event: any) => this.isTop = event.detail.scrollTop < 10);
  }

  scrollTop(): void {
    this.content.scrollToTop(0);
  }

  callBottomReach(event: any) {
    this.bottomReach(event);
  }

}
