import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.aapasmeinBussInf',
  appName: 'Business Influencer',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "FIT_CENTER",
      splashFullScreen: true,
      splashImmersive: true,
      useDialog: true,
    },
  },
  server: {
    androidScheme: 'https'
  },
};

export default config;
