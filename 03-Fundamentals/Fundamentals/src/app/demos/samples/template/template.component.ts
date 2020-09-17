import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  title = 'About Templated Components';
  nbr = 2;
  valid = false;
  constructor() {}

  ngOnInit() {}

  getIsValid() {
    return this.valid ? 'richtig' : 'foisch';
  }
}
