import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  permanentAddressForm!: FormGroup;
  temporaryAddressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.permanentAddressForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      flatNo: ['', Validators.required],
      streetName: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],

      
      sameAsTemporaryAddress: [false], // Checkbox default value is false
    });

    this.temporaryAddressForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      flatNo: ['', Validators.required],
      streetName: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
      
    });

    
    this.permanentAddressForm.get('sameAsTemporaryAddress')?.valueChanges.subscribe((isChecked) => {
      if (isChecked) {
     
        this.temporaryAddressForm.setValue(this.permanentAddressForm.getRawValue());
      } else {
       
        this.temporaryAddressForm.reset();
      }
    });
  }
}

