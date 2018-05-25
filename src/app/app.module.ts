import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule,AngularFireDatabase} from 'angularfire2/database';
import {AppRoutingModule} from './app-routing-module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import {AfService} from './providers/af.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AdminGuard} from './guards/admin.guard';
import {SubscriberGuard} from './guards/subscriber.guard';
import {MatButtonModule,MatToolbarModule,MatIconModule} from '@angular/material';
import {MaterialModule} from './material.module';
import {MenusService} from './service/menus/menus.service';
import {PostsService} from './service/posts/posts.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  
    
    
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [AfService, AdminGuard, SubscriberGuard,MenusService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
