import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';


import {AppComponent} from './app.component';
import {HelloWorld} from './MiprimerComponente/primer.component';
import {HolaMundoComponent} from './hola-mundo/hola-mundo.component';
import {UserComponent} from './user/user.component';
import { AboutComponent } from './about/about.component';

import {DataService} from './data.service';


const routes: Route[] = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
