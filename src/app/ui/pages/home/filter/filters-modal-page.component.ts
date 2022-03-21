import {Component, OnInit} from '@angular/core';
import {NavParams} from '@ionic/angular';
import {FilterOption} from 'src/app/ui/models/domains/filters/filter-option';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from 'src/app/ui/services/modal.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters-modal-page.component.html',
  styleUrls: ['./filters-modal-page.component.scss'],
})
export class FiltersModalPage implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({});
  filters: Array<FilterOption>;

  constructor(
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private modalService: ModalService) {
  }

  ngOnInit() {
    this.filters = this.navParams.get('filters');

    for (const filter of this.filters) {
      this.formGroup.addControl(filter.getPropertyName(), new FormControl(filter.getValue(), Validators.compose(
        filter.getRequired() ? [Validators.required] : []
      )));
    }

  }

  closeModal() {
    this.modalService.dismiss();
  }

  submitForm(form: object) {

    let count = 0;

    for (const index in form) {
      if (form.hasOwnProperty(index)) {
        this.filters[count].setValue(form[index]);
        count++;
      }
    }

    this.modalService.dismiss(this.filters);

  }


}
