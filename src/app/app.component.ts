import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles=[
      new Article('Angular1', 'http://link1', 10),
      new Article('Angular2', 'http://link1', 11),
      new Article('Angular3', 'http://link1', 12)
    ];

  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean {
    this.articles.push((new Article(title.value, link.value, 0)))
    title.value='';
    link.value='';
    return false;
  }
}
