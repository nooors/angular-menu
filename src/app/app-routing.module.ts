import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "layout",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "header",
    loadChildren: () =>
      import("./layout/header/header.module").then((m) => m.HeaderModule),
  },
  {
    path: "navigator",
    loadChildren: () =>
      import("./layout/navigator/navigator.module").then(
        (m) => m.NavigatorModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
