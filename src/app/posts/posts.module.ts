import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from '../shared/card/card.component';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [PostsComponent],
  exports: [PostsComponent]
})
export class PostsModule { }
