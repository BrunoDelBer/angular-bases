import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AdCharacterComponent } from './components/ad-character/ad-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AdCharacterComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
