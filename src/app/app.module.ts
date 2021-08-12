import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { MatrixGreenTextDirective } from './directives/matrix-green-text.directive';
import { StripVoewlPipe } from './pipes/strip-voewl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    MatrixGreenTextDirective,
    StripVoewlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
