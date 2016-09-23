import {FormControl, AbstractControl, FormGroup} from "@angular/forms";

export class CustomFormValidators {
    validateUrl(ctrl: FormControl) {

        const urlValue = ctrl.value;

        const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(urlValue);

        return valid ? null : {
            validUrl: {
                valid: false
            }
        };

    }

    cannotContainSpace(ctrl: FormControl){
        const value = ctrl.value;
        if(value.indexOf(' ') >= 0){
            return { cannotContainSpace : true };
        }else{
            return null;
        }
    }

    shouldBeUnique(ctrl: FormControl){
        return new Promise(function(resolve, reject) {

            // async stuff, like fetching users from server, returning a response
            setTimeout(function(){
                if(ctrl.value == 'kuflievskiy'){
                    // this is not unique

                    resolve({shouldBeUnique:true});
                }else{

                    // it's unique, valid
                    resolve(null);
                }
            }, 3000);
        });
    }



    oldPasswordShouldMatch(ctrl: FormControl){
        return new Promise(function(resolve, reject) {

            // async stuff, like fetching users from server, returning a response
            setTimeout(function(){
                if(ctrl.value == 'kuflievskiy'){
                    // this is not unique

                    resolve({oldPasswordShouldMatch:true});
                }else{

                    // it's unique, valid
                    resolve(null);
                }
            }, 3000);
        });
    }

    shouldBeComplexEnough(ctrl:FormControl){
        var requiredLength = 5;

        if(ctrl.value.length<requiredLength){
            return { shouldBeComplexEnough : {
                requiredLength : requiredLength,
                actualLength : ctrl.value.length
            } }
        }else{
            return null;
        }
    }

    passwordsShouldMatch(group: FormGroup){

        // var newPassword = group.controls.newPassword.value;
        // var confirmNewPassword = group.controls.confirmNewPassword.value;

        var newPassword = group.get('newPassword').value;
        var confirmNewPassword = group.get('confirmNewPassword').value;

        var $return = null;
        // If either of these fields is empty, the validation
        // will be bypassed. We expect the required validator to be
        // applied first.
        if (newPassword == '' || confirmNewPassword == ''){
            $return = null;
        }

        if (newPassword != confirmNewPassword){
            $return = { passwordsShouldMatch: true };
        }

        return $return;
    }

}