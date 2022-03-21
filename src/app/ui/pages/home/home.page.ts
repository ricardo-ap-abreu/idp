import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterOptionFactory} from '../../models/domains/filters/filter-option-factory';
import {FiltersModalPage} from './filter/filters-modal-page.component';
import {ModalService} from '../../services/modal.service';
import {Item} from '../../models/domains/item/item';
import {IonContent} from '@ionic/angular';
import {NavigationService} from "../../services/navigation.service";
import {RoutePath} from "../../models/domains/route-paths.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  items: Item[] = [];

  constructor(
    private modalService: ModalService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.fillItems();
  }

  showFilterModal() {

    const items: Array<Item> = [];

    for (let i = 0 ; i < 100; i++) {
      items.push({id: i, value: `teste${i}`});
    }

    const filterOptionFactory = new FilterOptionFactory();
    const textFilter = filterOptionFactory.createOptionText('textFilter', 'Text', 'textFilter', );
    const numberFilter = filterOptionFactory.createOptionNumber('numberFilter', 'Número',  'numberFilter', true);
    const dateFilter = filterOptionFactory.createOptionDate('Data Final:', 'FinalDate', true);
    const selectFilter = filterOptionFactory.createOptionComboBox( items, 'Select', 'select', true);
    const checkboxFilter = filterOptionFactory.createOptionCheckBox('checkbox', 'checkbox', false, true);

    const filters = [textFilter, numberFilter, dateFilter, selectFilter, checkboxFilter];
    this.modalService.show(FiltersModalPage, {filters});

  }

  fillItems() {
    for (let i = 0; i < 10; i++) {
      this.items.push({ id: i, value: `teste${i}` });
    }
  }

  addItems(event: any) {
    setTimeout(() => {

      this.fillItems();
      event.target.complete();

      if (this.items.length >= 30) {
        event.target.disabled = true;
      }

    }, 500);
  }

  goDetails(item: Item) {
    this.navigationService.push(RoutePath.HomeDetails, item);
  }

}
