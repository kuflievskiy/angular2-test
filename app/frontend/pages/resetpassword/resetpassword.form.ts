import {Component, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {CustomFormValidators}  from '../../components/validators/custom.form.validators';

@Component({
    selector: 'reset-password-form',
    templateUrl: 'app/frontend/pages/resetpassword/resetpassword.form.ts.html'
})
export class ResetPasswordForm implements OnChanges {

    form: FormGroup;
    initialValue: any;

    constructor(private fb: FormBuilder) {
        let customFormValidators = new CustomFormValidators();

        this.form = this.fb.group({
            password: ['',
                    [
                        Validators.required
                    ],
                    [
                        customFormValidators.oldPasswordShouldMatch // we use this custom validation rule to validate `password` field on backend
                    ]
            ],
            newPassword: ['', [
                Validators.required
                ,customFormValidators.shouldBeComplexEnough
            ]],
            confirmNewPassword: ['', [
                Validators.required
            ]],
        }, {
            validator: customFormValidators.passwordsShouldMatch
        });

    }


    isErrorVisible(field: string, error: string) {
        return this.form.controls[field].dirty && this.form.controls[field].errors && this.form.controls[field].errors[error];
    }

    showErrorCheckLoader(field: string) {
        return this.form.controls[field].dirty && this.form.controls[field].pending;
    }

    ngOnChanges(changes) {
        if (changes.initialValue) {
            this.form.patchValue(changes.initialValue.currentValue);
        }
    }

    isPasswordsMatch(){
        console.log('isPasswordsMatch');
        console.log(this.form.errors);
        return this.form.get('confirmNewPassword').touched && this.form.errors && this.form.errors.hasOwnProperty('passwordsShouldMatch');
    }

    onSubmit() {
        console.log(this.form);
    }

    log(){
        console.log(this.form);
    }
}