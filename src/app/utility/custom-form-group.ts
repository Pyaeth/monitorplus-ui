import { FormGroup } from "@angular/forms";

export class CustomFormGroup extends FormGroup {
    form: FormGroup;
    constructor(formGroupObject: any) {
        super(formGroupObject);
        this.form = new FormGroup(formGroupObject);
    }

    isReadyForSubmit() {
        return this.form ? !this.form.valid : false;
      }
}