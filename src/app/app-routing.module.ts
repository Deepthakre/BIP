import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { TabsComponent } from './tabs/tabs.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      // {
      //   path: 'product-info',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('./product-info/product-info.module').then(m => m.ProductInfoPageModule)
      //     }
      //   ]
      // },
      {
        path: 'my-lead',
        children: [
          {
            path: '',
            loadChildren: () => import('./my-lead/my-lead.module').then(m => m.MyLeadPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'title',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'terms-condition',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'doc',
    loadChildren: () => import('./pages/doc/doc.module').then( m => m.DocPageModule)
  },
  {
    path: 'bil-code',
    loadChildren: () => import('./pages/bil-code/bil-code.module').then( m => m.BILCodePageModule)
  },
  {
    path: 'realation-aapasmein',
    loadChildren: () => import('./pages/realation-aapasmein/realation-aapasmein.module').then( m => m.RealationAapasmeinPageModule)
  },
  {
    path: 'basic-info',
    loadChildren: () => import('./pages/basic-info/basic-info.module').then( m => m.BasicInfoPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./pages/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OTPPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'e-sign',
    loadChildren: () => import('./pages/e-sign/e-sign.module').then( m => m.ESignPageModule)
  },
  {
    path: 'selfie',
    loadChildren: () => import('./pages/selfie/selfie.module').then( m => m.SelfiePageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'agrement',
    loadChildren: () => import('./pages/agrement/agrement.module').then( m => m.AgrementPageModule)
  },
  {
    path: 'bank-info',
    loadChildren: () => import('./pages/bank-info/bank-info.module').then( m => m.BankInfoPageModule)
  },
  {
    path: 'new-ref-form',
    loadChildren: () => import('./pages/new-ref-form/new-ref-form.module').then( m => m.NewRefFormPageModule)
  },
  {
    path: 'terms-condition',
    loadChildren: () => import('./terms-condition/terms-condition.module').then( m => m.TermsConditionPageModule)
  },
  {
    path: 'rough',
    loadChildren: () => import('./rough/rough.module').then( m => m.RoughPageModule)
  },
   {
      path: 'product-info',
      children: [
        {
          path: '',
          loadChildren: () => import('./product-info/product-info.module').then(m => m.ProductInfoPageModule)
        }
      ]
    },
  {
    path: 'dashboard-success',
    loadChildren: () => import('./dashboard-success/dashboard-success.module').then( m => m.DashboardSuccessPageModule)
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule)
  },
  {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then( m => m.LoansPageModule)
  },
  
];

@NgModule({
  imports: [IonicModule,CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule,TabsComponent],
  declarations: [TabsComponent],
})
export class AppRoutingModule { }
