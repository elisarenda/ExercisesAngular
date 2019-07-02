import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  name: string;
  age: number;
  numArray: number[];
  strArray: Array<string>;

  constructor() {
    this.name = "Elisa";
    this.age = 20;
    this.numArray=[10, 20, 30];
    this.strArray=["Elisa", "Estelle", "Andres"]
  }
  ngOnInit() {}
}
