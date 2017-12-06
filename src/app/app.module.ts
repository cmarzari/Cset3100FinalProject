import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { environment } from './../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { RecentforsaleComponent } from './recentforsale/recentforsale.component';
import { RecentblogpostsComponent } from './recentblogposts/recentblogposts.component';
import { HomejumboComponent } from './homejumbo/homejumbo.component';
import { HomeComponent } from './home/home.component';
import { BikeanimationComponent } from './bikeanimation/bikeanimation.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ForsaleComponent } from './forsale/forsale.component';



const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent }, 
  { path: 'About', component: AboutComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'NewArticle', component: NewarticleComponent },
  { path: 'Signin', component: SigninComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'ForSale', component: ForsaleComponent},
  { path: '', redirectTo:'/Home', pathMatch: 'full'}  
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent,
    BlogComponent,
    RecentforsaleComponent,
    RecentblogpostsComponent,
    HomejumboComponent,
    HomeComponent,
    BikeanimationComponent,
    NewarticleComponent,
    SigninComponent,
    ContactComponent,
    ForsaleComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
