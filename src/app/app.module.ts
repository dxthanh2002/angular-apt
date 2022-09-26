import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {HttpClientModule} from "@angular/common/http";
import {IceComponent} from "./ice/ice.component";

// khai bao cac page
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'Food',component:FoodComponent},
  {path: 'Ice',component:IceComponent},




]
@NgModule({
  declarations: [
    AppComponent, StudentComponent,ClassroomComponent,HomeComponent,LoginComponent,FoodComponent,IceComponent

  ],
  // chu y
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
