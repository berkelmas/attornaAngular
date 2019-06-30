import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { Title, Meta } from '@angular/platform-browser';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css'],
  animations: [
    trigger('formAnimation', [
      transition('void => enteredMessage', [style({opacity : 0, height: 0}), animate('500ms')]),
      transition('enteredMessage => void', animate('500ms', style({opacity: 0, height: 0})))
    ])
  ]
})
export class ContactpageComponent implements OnInit {

  submittedTrue: boolean;
  submittedError: boolean;

  constructor(private contactService: ContactService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {

    this.titleService.setTitle('Alfa Hukuk & Danışmanlık | İletişim');
    this.metaService.updateTag({name: 'description', content: 'Alfa Hukuk & Danışmanlık bürosuna bu sayfadan ulaşabilir ve iletişime geçebilirsiniz.'});

  }

  handleSubmit(f: NgForm) {
    const result = f.value;
    if (result.name === '' || result.ulasim === '' || result.message === '') {
      return;
    }

    this.contactService.sendContactData(result.name, result.email, result.message)
      .subscribe(
        res => {
          this.submittedTrue = true;
          f.reset();
          setTimeout(() => {
            this.submittedTrue = false;
          }, 3000)
        },
        err => {
          this.submittedError = true;
          f.reset();
          setTimeout(() => {
            this.submittedError = false;
          }, 3000);
        }
      )
  }

}
