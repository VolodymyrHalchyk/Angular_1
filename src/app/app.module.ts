import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './users/user/user.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
