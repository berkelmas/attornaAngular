import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakalelerService {
  constructor(private http: HttpClient) {}

  getMakale(page: number) {
    if (page) {
        return this.http.get(`https://api.isavukatim.com/makalesixitem/?page=${page}`);
    } else {
        return this.http.get(`https://api.isavukatim.com/makalesixitem/`);
    }
  }

  getSingleMakale(id: number) {
    return this.http.get(`https://api.isavukatim.com/makale/${id}`)
  }
  
}
