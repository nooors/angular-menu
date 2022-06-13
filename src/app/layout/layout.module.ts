import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { HeaderModule } from "./header/header.module";
import { NavigatorModule } from "./navigator/navigator.module";
import { MainComponent } from "./main/main.component";
import { MainModule } from "./main/main.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    NavigatorModule,
    MainModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
