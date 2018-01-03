import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BicysComponent } from './bicys/bicys.component';
import { BicyComponent } from './bicys/bicy/bicy.component';
import { BicylistComponent } from './bicys/bicylist/bicylist.component';
import { environment} from '../environments/environment';
import { MapComponent } from './bicys/map/map.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';


  

@NgModule({
  declarations: [
    AppComponent,
    BicysComponent,
    BicyComponent,
    BicylistComponent,
    MapComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule, FormsModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
