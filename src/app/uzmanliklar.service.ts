import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UzmanliklarService {
  constructor(private http: HttpClient) {}

  getUzmanliklar() {
    return this.http.get<[]>(`http://localhost:8000/uzmanliklar/`);
  }

  getSingleUzmanlik(id: number) {
    return this.http.get(`http://localhost:8000/uzmanlik/${id}`)
  }

}
