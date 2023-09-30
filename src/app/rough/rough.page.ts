import { Component, OnInit } from '@angular/core';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.page.html',
  styleUrls: ['./rough.page.scss'],
})
export class RoughPage implements OnInit {
  capturedImage: string | undefined;
  defaultImage: string = 'https://www.w3schools.com/howto/img_avatar.png';
  constructor() {}

  ngOnInit() {
}
async openCamera() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera, // Use the default camera (back camera)
    direction: CameraDirection.Front, // Use the front camera
  });
  this.capturedImage = image.dataUrl;
}

products = [
  { name: 'Product Name:ICICI Bank', description: 'Date:26-10-2023 ',status:'New & pending',color:'green'  },
  { name: 'Product Name:ICICI Bank', description: 'Date:26-10-2023 ',status:'New & pending',color:'green' },
  { name: 'Product Name:ICICI Bank', description: 'Date:26-10-2023 ', status:'New & pending',color:'green'  },
  { name: 'Product Name:ICICI Bank', description: 'Date:26-10-2023 ', status:'New & pending',color:'green'  },
  { name: 'Product Name:ICICI Bank', description: 'Date:26-10-2023 ', status:'New & pending',color:'green'  }
];

selectedProduct: any;
remove:any='';

  toggleProductDetails(product: any) {
    if (this.selectedProduct === product) {
      this.selectedProduct = null; // Hide details if already selected
    } else {
      this.selectedProduct = product; // Show details of the clicked product
    }
  }

}

