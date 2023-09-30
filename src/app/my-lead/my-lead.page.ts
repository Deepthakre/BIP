import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-lead',
  templateUrl: './my-lead.page.html',
  styleUrls: ['./my-lead.page.scss'],
})
export class MyLeadPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = [
    { name: 'Product Name: ICICI Bank', description: 'Date: 26-10-2023 ',status:'New & pending',color:'green' },
    { name: 'Product Name: ICICI Bank', description: 'Date: 26-10-2023 ',status:'New & pending',color:'green' },
    { name: 'Product Name: ICICI Bank', description: 'Date: 26-10-2023 ', status:'New & pending',color:'green'  },
    { name: 'Product Name: ICICI Bank', description: 'Date: 26-10-2023 ', status:'New & pending',color:'green'  },
    { name: 'Product Name: ICICI Bank', description: 'Date: 26-10-2023 ', status:'New & pending',color:'green'  }
  ];
  
  selectedProduct: any;
  remove:any='';

  
   // show Details 
  // showProductDetails(product: any) {
  //   this.selectedProduct = product;
  // }


  toggleProductDetails(product: any) {
    if (this.selectedProduct === product) {
      this.selectedProduct = null; // Hide details if already selected
    } else {
      this.selectedProduct = product; // Show details of the clicked product
    }
  }

}
