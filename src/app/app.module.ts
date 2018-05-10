import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommentsModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
