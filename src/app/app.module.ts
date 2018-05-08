import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { GrowthService } from './growth.service'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { CompareComponent } from './compare/compare.component'

const appRoutes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'compare', component: CompareComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: '/about', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GrowthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
