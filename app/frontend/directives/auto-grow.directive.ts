import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector : '[autoGrow]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})

export class AutoGrowDirective {
    private _el:ElementRef;
    private _renderer:Renderer;
    constructor(el:ElementRef,renderer:Renderer){
        this._renderer = renderer;
        this._el = el;
    }
    onFocus(){
        console.log('onFocus');
        console.log(this._el);
        console.log(this._renderer);
        this._renderer.setElementStyle(this._el.nativeElement, 'width', '400px');
    }
    onBlur(){
        console.log('onBlur');
        this._renderer.setElementStyle(this._el.nativeElement, 'width', '200px');
    }
}