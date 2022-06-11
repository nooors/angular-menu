import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.scss"],
})
export class NavigatorComponent implements OnInit {
  links: string[] = [
    "Departaments",
    "Families",
    "Languages",
    "Products",
    "Product Types",
  ];
  constructor() {}

  ngOnInit(): void {}
}
