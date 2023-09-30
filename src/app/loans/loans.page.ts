import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckboxCustomEvent } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  items = [
    { title: 'ICICI BANK', description: 'Home Loan ' , images: 'https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/banner2.jpg', },
    { title: 'ICICI BANK', description: 'Gold Loan ' , images: 'https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/banner2.jpg', },
    { title: 'ICICI BANK', description: 'Car Loan' , images: 'https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/banner2.jpg', },

    { title: 'ICICI BANK', description: 'Personal Loan' , images: 'https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/banner2.jpg', },
  ];
  
  canDismiss = false;
 
  presentingElement = null;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
   
  }
  submitOTP() {
    this.dismissModal();
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
