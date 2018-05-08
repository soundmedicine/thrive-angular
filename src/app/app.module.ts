import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { GrowthService } from './growth.service'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CompareComponent } from './compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GrowthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
