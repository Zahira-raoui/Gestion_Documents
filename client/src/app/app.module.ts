import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from 'src/materiel.module';
import { ToastrModule } from 'ngx-toastr';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ActivationComponent } from './activation/activation.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ModifierFolderComponent } from './modifier-folder/modifier-folder.component';
import { ManipulerDocumentsComponent } from './manipuler-documents/manipuler-documents.component';
import { ModifierDocumentComponent } from './modifier-document/modifier-document.component';



@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AuthentificationComponent,
    UserComponent,
    HomeComponent,
    ActivationComponent,
    AddDocumentComponent,
    ModifierFolderComponent,
    ManipulerDocumentsComponent,
    ModifierDocumentComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
