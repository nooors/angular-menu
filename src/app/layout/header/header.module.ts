import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderRoutingModule } from "./header-routing.module";
import { HeaderComponent } from "./header.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [CommonModule, HeaderRoutingModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
