import {Component, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'signup-form',
    templateUrl: 'app/frontend/pages/signup/signup.html'
})
export class SignUpForm implements OnChanges {

    form: FormGroup;

    //@Input()
    initialValue: any;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            login: ['', Validators.required],
            password: ['', [
                Validators.required
            ]],
            longDescription: ['']
        });
    }


    isErrorVisible(field:string, error:string) {
        return this.form.controls[field].dirty &&this.form.controls[field].errors && this.form.controls[field].errors[error];
    }

    ngOnChanges(changes) {
        if (changes.initialValue) {
            this.form.patchValue(changes.initialValue.currentValue);
        }
    }


    onSubmit() {
        console.log(this.form);
    }
}