import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-avsinglepage',
  templateUrl: './avsinglepage.component.html',
  styleUrls: ['./avsinglepage.component.css']
})
export class AvsinglepageComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Av. Ali Tarak Kimdir?');
    this.metaService.updateTag({name: 'description', content: 'Alfa Hukuk & Danışmanlık bürosu kurucusu olan Avukat Ali Tarak kimdir?'});
  }
}
