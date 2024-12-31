import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GreenPost } from './green-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreenPostService {

  private baseUrl =  "http://localhost:8080/allPosts";

  constructor(
    private httpClient: HttpClient
  ) { }

  getGreenPostList(): Observable<GreenPost[]> {
    return this.httpClient.get<GreenPost[]>(`${this.baseUrl}`);
  }
}
