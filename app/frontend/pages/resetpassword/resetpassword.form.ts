import {Component, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {CustomFormValidators}  from '../../components/validators/custom.form.validators';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';

//import 'rxjs/add/operator/mergeMap'; // flatMap
//import 'rxjs/add/observable/fromEvent';
//import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';

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


        // Reactive Extensions
        // this.form.get('password').valueChanges
        //     .debounceTime(1000)
        //     .map(str => (<string>str).replace(' ', '-'))
        //     .subscribe(x => {
        //         console.log('Observable password changed: ' + x);
        //     });

        // Creating an observable from an array
        // var observable = Observable.from([1,2,3]);
        // observable.subscribe(x=>console.log('Observable from Array element ' + x));


        // Other ways to create an observable
        // var observable_1 = Observable.of(1);
        // var observable_1 = Observable.of(1,2,3);
        // var observable_1 = Observable.of([1,2,3]);
        // observable_1.subscribe(x=>console.log(x));

        // Observable.empty().subscribe(x=>{
        //     console.log('empty observable: ' + x );
        // });

        // Observable.range(1,5).subscribe(x=>{
        //     console.log('range observable: ' + x );
        // });

        // Observable.of([1,2,3]).subscribe(x=>{
        //     console.log('range observable: ' + x );
        // });

        // Implementing a timer
        /*
        var observableTimer = Observable.interval(1000);
        observableTimer
            .flatMap(x=>{
                console.info('calling the server to get the latest news # ' + x);
                return Observable.of([1,2,3]);
            })
            .subscribe(x=>console.log(x));
        */

        // Running Parallel Operations
        /*
        var parallerObservable1 = Observable.of({username:"kuflievskiy",firstName:"ALeksey"}).delay(1500);
        var parallerObservable2 = Observable.of({username:"admin",firstName:"Mazafaka"}).delay(2500);
        var commonParallerlObservable = Observable.forkJoin(parallerObservable1,parallerObservable2);
        commonParallerlObservable.subscribe(x => {
            console.log('commonParallerlObservable');
            console.log(x);
        });
        */

        // Handling Errors
        // var observableWithErrorHandling = Observable.throw(new Error("Something failed"));
        // observableWithErrorHandling.subscribe(x => console.log(x), error => console.log(error));

        // Retry operator
        /*
        var retryAttempt = 0;
        var observableWithErrorHandling = Observable.of('url')
            .delay(1000)
            .flatMap(x=>{
               if(++retryAttempt<2){
                   return Observable.throw(new Error('something went wrong retryAttempt = ' + retryAttempt));
               }
               return Observable.of([1,2,3,4,5,6,7,8,9]);
            });

        observableWithErrorHandling
            .catch(err=>{
                var localDataStream = Observable.of([1,2,3,4]);
                return localDataStream;
            })
            .retry(3)
            .timeout(1000)
            .subscribe(x => console.log(x), error => console.log(error));
        */
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
        return this.form.get('confirmNewPassword').touched && this.form.errors && this.form.errors.hasOwnProperty('passwordsShouldMatch');
    }

    onSubmit() {
        console.log(this.form);
    }

    log(){
        console.log(this.form);
    }
}