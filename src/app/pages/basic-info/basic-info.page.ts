import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage implements OnInit {

  formData = {
    name: '',
    address: '',
    pan: '',
    aadhaar: ''
  };
  infoForm: any;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    if (this.infoForm.valid) {
      console.log(this.formData);
    }
  }
}
