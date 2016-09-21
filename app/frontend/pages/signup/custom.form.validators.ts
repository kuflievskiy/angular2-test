import {FormControl} from "@angular/forms";

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
            }, 1000);
        });
    }
}