import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  submitOTP() {
    this.dismissModal();
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
