import {Component, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CustomFormValidators}  from './custom.form.validators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/frontend/pages/signup/signup.html'
})
export class SignUpForm implements OnChanges {

    form: FormGroup;
    initialValue: any;

    constructor(private fb: FormBuilder) {
        let customFormValidators = new CustomFormValidators();
        this.form = this.fb.group({
            login: ['', [
                Validators.required,
                customFormValidators.cannotContainSpace
            ],
            [
                customFormValidators.shouldBeUnique
            ]
            ],
            password: ['', [
                Validators.required
            ]],
            longDescription: ['']
        });
    }


    isErrorVisible(field:string, error:string) {
        return this.form.controls[field].dirty &&this.form.controls[field].errors && this.form.controls[field].errors[error];
    }

    showErrorCheckLoader(field:string) {
        return this.form.controls[field].dirty &&this.form.controls[field].pending;
    }

    ngOnChanges(changes) {
        if (changes.initialValue) {
            this.form.patchValue(changes.initialValue.currentValue);
        }
    }


    onSubmit() {

        // var result = authService.login(this.form.value);

        this.form.controls.login.setErrors({
           invalidLogin: true
        });

        console.log(this.form);
    }
}