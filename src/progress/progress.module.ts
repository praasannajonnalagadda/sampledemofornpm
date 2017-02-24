import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProgressComponent } from './progress.component';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports :[
    ProgressComponent
  ],
  providers: [],
  bootstrap: [ProgressComponent]
})
export class ProgressModule { }
