import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DreamService {
  private apiUrl = 'http://localhost:8080/api/dreams'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getDreams(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
