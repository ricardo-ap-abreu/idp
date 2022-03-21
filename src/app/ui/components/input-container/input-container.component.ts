import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../models/domains/form/form-group-message';

@Component({
  selector: 'custom-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent implements OnInit {

  @Input() group: FormGroup;
  abstractControl: AbstractControl;

  @Input() messages: FormGroupMessage[] = [];
  formMessage: FormGroupMessage;

  @Input() name: string;
  @Input() hasFocus: boolean;
  @Input() alwaysValid: boolean;

  ngOnInit() {
    this.abstractControl = this.group.get(this.name);
    this.formMessage = this.messages.find(message => this.name === message.name);
  }

  getClassForm(): string {

    const { abstractControl } = this;

    if (!abstractControl) {
      return '';
    } else if (this.alwaysValid || (abstractControl.valid && abstractControl.value)) {
      return 'has-success';
    } else if (abstractControl.invalid && (abstractControl.touched || abstractControl.value)) {
      if (this.hasFocus) {
        return 'has-warning';
      } else {
        return 'has-error';
      }
    } else {
      return '';
    }
  }

}
