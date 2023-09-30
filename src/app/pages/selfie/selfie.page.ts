import { Component, OnInit } from '@angular/core';
// import { Plugins, CameraResultType } from '@capacitor/core';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
// const { Camera } = Plugins;
@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.page.html',
  styleUrls: ['./selfie.page.scss'],
})
export class SelfiePage implements OnInit {

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
    // source: CameraSource.Camera, // Use the default camera (back camera)
    direction: CameraDirection.Front, // Use the front camera
  });
  this.capturedImage = image.dataUrl;
}
}
