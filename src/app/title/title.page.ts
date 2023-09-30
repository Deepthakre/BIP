import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-title',
  templateUrl: './title.page.html',
  styleUrls: ['./title.page.scss'],
})
export class TitlePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.router.navigate(['/terms-condition']);
    //   }, 8000); //5s
       }

       ionViewWillEnter(){
        setTimeout(() => {
          this.router.navigate(['/terms-condition']);
          }, 3000); //5s
    }
  }


