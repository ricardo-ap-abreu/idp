import { FormGroup } from '@angular/forms';
import { FormGroupMessage } from '../form/form-group-message';

export interface AlertModalInput {
  title: string;
  text?: string;
  inputs: {
    name: string;
    placeholder: string;
    type: string;
  }[];
  formGroup: FormGroup;
  formGroupMessage: FormGroupMessage[];
  confirmPress: (form: {[key: string]: string}) => void
}
