import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  sampleHtml: any;
  constructor() { }

  ngOnInit(): void {
    this.sampleHtml = ``;
  }
}
