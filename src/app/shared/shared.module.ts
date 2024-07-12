import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    SectionGenericComponent,
    CardComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    NavBarComponent,
    CardComponent,
    SectionGenericComponent,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
