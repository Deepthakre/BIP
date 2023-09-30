import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-success',
  templateUrl: './dashboard-success.page.html',
  styleUrls: ['./dashboard-success.page.scss'],
})
export class DashboardSuccessPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    setTimeout(() => {
    this.router.navigate(['/tabs/dashboard']);
    }, 3000); //5s
     }
}
