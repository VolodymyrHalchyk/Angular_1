import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {

    return this.httpClient.get<Post[]>(this.url)
  }

}
