import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "services", component: ServicesComponent},
  {path: "careers", component: CareersComponent},
  {path: "contacts", component: ContactComponent},
  // {path: "login", component: LoginComponent},
  {path: "login", component: ComingSoonComponent},
  {path: "coming-soon", component: ComingSoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
