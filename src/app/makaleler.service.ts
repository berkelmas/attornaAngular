import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakalelerService {
  constructor(private http: HttpClient) {}

  getMakale(page: number) {
    return this.http.get(`http://localhost:8000/getmakalefilterable/?page=${page}`);
  }

  getSingleMakale(id: number) {
    return this.http.get(`http://localhost:8000/makale/${id}`)
  }

}
