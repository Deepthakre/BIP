import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('radioButton', { static: false }) radioButton!: ElementRef;
  radioChecked = false;

  selectCard() {
    this.radioChecked = !this.radioChecked;
  }

  selectRadioButton(event: Event) {
    event.stopPropagation();
    // Add any specific logic here if needed
  }
  handleCardClick() {
    this.radioButton.nativeElement.checked = !this.radioButton.nativeElement.checked;
  }
}
