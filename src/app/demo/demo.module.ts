import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { DemoState } from './demo.state';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { Com1Component } from './comA/_com1.component';
import { DemoService } from './demo.service';

import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forFeature([
      DemoState
    ]),
    DemoRoutingModule,
    MessageModule,
    MessagesModule,
    CheckboxModule,
    ButtonModule,
    BadgeModule,
    FieldsetModule
  ],

  declarations: [
    DemoComponent,
    Com1Component
  ],

  providers: [
    DemoService
  ]

})
export class DemoModule { }
