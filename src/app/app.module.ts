import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroModule } from "./hero/hero.module";
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
const heros: Routes = [
  {
    path: '',
    redirectTo: '/heros',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(heros),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
  ],
  providers:[{
    provide:'BASE_URL',
    useValue:'http://localhost:3000'
  }],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
