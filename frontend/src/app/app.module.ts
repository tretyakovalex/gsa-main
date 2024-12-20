import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareersComponent } from './pages/careers/careers.component';
import { LoginComponent } from './pages/login/login.component';
import { TitleComponentComponent } from './partials/title-component/title-component.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { GalleryComponent } from './partials/gallery/gallery.component';
import { AboutHeroComponent } from './partials/about-hero/about-hero.component';
import { ServicesHeroComponent } from './partials/services-hero/services-hero.component';
import { AltNavbarComponent } from './partials/alt-navbar/alt-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    CareersComponent,
    LoginComponent,
    TitleComponentComponent,
    ContactComponent,
    ComingSoonComponent,
    GalleryComponent,
    AboutHeroComponent,
    ServicesHeroComponent,
    AltNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
