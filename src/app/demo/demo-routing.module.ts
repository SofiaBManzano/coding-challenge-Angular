import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { Com1Component } from './comA/_com1.component';
import { Com2Component } from './comB/_com2.component';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'com1',
        component: Com1Component
      }
    ]
  },
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'com2',
        component: Com2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
