import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }
  async initializeApp() {
    await SplashScreen['show']({
      autoHide: true
    });
    // Perform any necessary app initialization tasks here

    // Simulate a delay, remove this line in your actual implementation
    await new Promise(resolve => setTimeout(resolve, 2000));

    await SplashScreen['hide']();
  }
}
