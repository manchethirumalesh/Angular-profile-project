import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorksComponent } from './my-works/my-works.component';

const routes: Routes = [

  // {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'myworks', component: MyWorksComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
