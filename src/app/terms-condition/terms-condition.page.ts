import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.page.html',
  styleUrls: ['./terms-condition.page.scss'],
})
export class TermsConditionPage implements OnInit {
  isSubmitEnabled: boolean = false;
  isChecked: boolean = false;
  constructor(private router:Router){ }

  ngOnInit() {
  }
  handleCheckboxChange() {
    this.isSubmitEnabled = !this.isSubmitEnabled;
  }
  submitForm(){
    console.log("hello");
    this.router.navigateByUrl('/login');

  }
}
