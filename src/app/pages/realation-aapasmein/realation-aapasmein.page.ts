import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-realation-aapasmein',
  templateUrl: './realation-aapasmein.page.html',
  styleUrls: ['./realation-aapasmein.page.scss'],
})
export class RealationAapasmeinPage implements OnInit {
  @ViewChild('radioButton', { static: false }) radioButton!: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  radioChecked = false;

  selectCard() {
    this.radioChecked = !this.radioChecked;
  }

  selectRadioButton(event: Event) {
    event.stopPropagation();
    // Add any specific logic here if needed
  }
  selectedOption!: string;

  handleCardClick(option: string) {
    this.selectedOption = option;
  }
} 
