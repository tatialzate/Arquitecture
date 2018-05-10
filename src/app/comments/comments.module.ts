import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from '../shared/card/card.component';
import { CommentsComponent } from './comments.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CommentsComponent],
  exports: [CommentsComponent]
})
export class CommentsModule { }
