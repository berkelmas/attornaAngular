import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  sendContactData(name: string, ulasim: string, message: string) {
    return this.http.post('https://api.alitarak.com/addcontact/', {contact_isim: name, contact_ulasim: ulasim, contact_message: message})
  }

}
