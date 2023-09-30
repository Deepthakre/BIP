import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-e-sign',
  templateUrl: './e-sign.page.html',
  styleUrls: ['./e-sign.page.scss'],
})
export class ESignPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  submitOTP() {
    this.dismissModal();
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
} 
