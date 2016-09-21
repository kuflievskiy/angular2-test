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
}