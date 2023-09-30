import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bil-code',
  templateUrl: './bil-code.page.html',
  styleUrls: ['./bil-code.page.scss'],
})
export class BILCodePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedOption!: string;

  handleCardClick(option: string) {
    this.selectedOption = option;
  }
}
