import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ManipulerDocumentsComponent } from './manipuler-documents/manipuler-documents.component';

const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'inscription', component: InscriptionComponent },
   { path: 'user', component: UserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'manipuler-documents', component: ManipulerDocumentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
