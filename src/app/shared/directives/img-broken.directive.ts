import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleEvent(): void {
    const native = this.host.nativeElement
    console.log(":(")
    native.src = "../../../assets/broken-image.png"
  }

  constructor(private host: ElementRef) {

  }

}
