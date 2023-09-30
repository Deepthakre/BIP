import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckboxCustomEvent } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  items = [
    { title: 'ICICI BANK', description: 'Lorem ipsum dolor sit amet ' , images: 'https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/banner2.jpg', },
    { title: 'HDFC BANK', description: ' Lorem ipsum dolor sit amet,', images:'https://cm-cdn.creditmantri.com/community/article/hdfc-bank-loan-restructuring-offer-for-borrowers-heres-all-that-you-need-to-know.jpg' },

    { title: 'AXIS BANK', description: 'Lorem ipsum dolor sit amet,  ',images:'https://i0.wp.com/www.credithelper.in/wp-content/uploads/2023/05/Axis-Bank-Personal-Loan-Details.jpg' },
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
