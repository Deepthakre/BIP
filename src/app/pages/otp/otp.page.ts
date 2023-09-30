import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OTPPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  otp: string[] = ['', '', '', ''];
  keypadNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];

  addDigit(num: number) {
    const emptyIndex = this.otp.findIndex((digit) => digit === '');
    if (emptyIndex !== -1) {
      this.otp[emptyIndex] = num.toString();
    }
  }

  nextInput(index: number) {
    if (index < 4 && this.otp[index - 1]) {
      const inputField = document.querySelector(`input[type="text"][maxlength="1"]:nth-child(${index + 1})`) as HTMLInputElement;
      inputField.focus();
    }
  }

  clearLast() {
   this.otp=['','','',''];
  }

  getColor(num: number) {
    return num === 0 ? 'white' : 'white';
  }
}


