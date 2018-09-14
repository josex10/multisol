//MDBBOOTSTRAP
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

//ANGULAR COMPONENTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { IndexComponent } from './index/index.component';
import { Cmpservice1Component } from './cmpservice1/cmpservice1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CmpcontactComponent } from './cmpcontact/cmpcontact.component';
import { CmpourusComponent } from './cmpourus/cmpourus.component';

const appRoutes: Routes = [
  {path : '', redirectTo: '/index', pathMatch:'full'},
  {path : 'index', component : IndexComponent},
  {path: 'ourus', component: CmpourusComponent},
  {path: 'contact', component: CmpcontactComponent},
  {path: 'service1', component: Cmpservice1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ServicesComponent,
    Section1Component,
    Section2Component,
    IndexComponent,
    Cmpservice1Component,
    NavbarComponent,
    CmpcontactComponent,
    CmpourusComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MDBSpinningPreloader
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
