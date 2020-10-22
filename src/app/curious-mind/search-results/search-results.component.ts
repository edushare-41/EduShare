import { Component, OnInit } from '@angular/core';
import { Results } from '../results';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  searchResults: any[] = [
   {
    // tslint:disable: quotemark
    "topic": "Card",
    "body": "Play around with card layout and build a group of cards.",
    "author": "Kirigano",
    "institution": "Alliance high school"
  },
  {
    "topic": "Carousel",
    "body": "Set up a slideshow to cycle through a series of slides, text, or images. Built with CSS 3D and some JS.",
    "author": "Paul",
    "institution": "Lenana school"
  },
  {
    "topic": "Custom Forms",
    "body": "Bootstrap 4 has several customized form elements that replace the browser defaults.",
    "author": "Anto",
    "institution": "Kenya high school"
  }
  ];
  constructor() { }

}
