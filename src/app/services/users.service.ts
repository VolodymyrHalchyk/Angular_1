import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }
}