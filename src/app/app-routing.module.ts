import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorksComponent } from './my-works/my-works.component';

const routes: Routes = [

 
  {path: 'about', component: AboutComponent,  pathMatch:"full" },
  {path: 'myworks', component: MyWorksComponent, pathMatch:"full"},
  {path: 'contact', component: ContactComponent,  pathMatch:"full"},
  {path: '', component: AboutComponent,  pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
