import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ServicesComponent } from '../app/services/services.component';
import { BlogComponent } from '../app/blog/blog.component';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'homerouting', component: HomeComponent},
  { path: 'servicesrouting', component: ServicesComponent},
  { path: 'blogrouting', component: BlogComponent},
  { path: 'aboutrouting', component: AboutComponent},
  { path: 'contactrouting', component: ContactComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
