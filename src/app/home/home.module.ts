import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { NgModule } from "@angular/core";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { HomeComponent } from "./home.component";

import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";

registerLocaleData(en);

@NgModule({
  declarations: [HomeComponent],

  imports: [NgxsFormPluginModule, CardModule, CommonModule],

  exports: [HomeComponent],
})
export class HomeModule {}
