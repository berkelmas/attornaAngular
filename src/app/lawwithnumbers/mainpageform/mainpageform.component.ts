import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { ContactService } from '../../contact.service';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-mainpageform',
  templateUrl: './mainpageform.component.html',
  styleUrls: ['./mainpageform.component.css'],
  animations: [
    trigger('formAnimation', [
      transition('void => enteredMessage', [style({opacity : 0, height: 0}), animate('500ms')]),
      transition('enteredMessage => void', animate('500ms', style({opacity: 0, height: 0})))
    ])
  ]
})
export class MainpageformComponent implements OnInit {

  name: string;
  ulasim: string;
  message: string;

  submittedTrue: boolean = false;
  submittedError: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  handleSubmit(f: NgForm) {
    const result = f.value;
    if (result.name === '' || result.ulasim === '' || result.message === '') {
      return;
    }
    this.contactService.sendContactData(result.name, result.ulasim, result.message)
      .subscribe(
        res => {
          this.submittedTrue = true;
          f.reset();
          setTimeout(() => {
            this.submittedTrue = false;
          }, 3000)
        },
        error => {
          console.log(error);
          this.submittedError = true;
          setTimeout(() => {
            this.submittedError = false;
          }, 3000)
          f.reset();
        }
      );
  }

}
