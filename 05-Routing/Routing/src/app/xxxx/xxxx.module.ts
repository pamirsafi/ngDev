import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XxxxRoutingModule } from './xxxx-routing.module';
import { XxxxComponent } from './xxxx.component';


@NgModule({
  declarations: [XxxxComponent],
  imports: [
    CommonModule,
    XxxxRoutingModule
  ]
})
export class XxxxModule { }
