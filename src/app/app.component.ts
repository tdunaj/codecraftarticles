import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="row">
  <recent-articles></recent-articles>
  </div>
`
})
export class AppComponent {
}


@Component({
  selector: 'recent-articles',
  template: `<div class="col-md-4">
  <div *ngFor="let article of articles" class="card mb-3" style="width: 20rem;"
    [ngClass]="{'border border-primary':article.kind === 'text',
        'border border-danger':article.kind === 'image' }">
    <div class="card-body">
      <h4 class="card-title">{{ article.title }}</h4>
        <p *ngIf="article.kind === 'text'" class="card-text">{{ article.content }}</p>
      <p class="card-text">
        <small class="text-muted">Last Updated {{ article.date | date:"shortDate" }}</small>
      </p>
    </div>
    <img *ngIf="article.kind === 'image'" class="card-img-bottom img-fluid"
         src="{{ article.content }}">
  </div>
</div>

`
})
export class RecentArticlesComponent {
  articles: Article[] = [
    new Article("Title 1", new Date(), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula", "text"),
    new Article("Title 2", new Date(), "https://unsplash.it/400?image=10", "image"),
    new Article("Title 3", new Date(), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula", "text"),
    new Article("Title 4", new Date(), "https://unsplash.it/400?image=20", "image"),
    new Article("Title 5", new Date(), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula", "text"),
    new Article("Title 6", new Date(), "https://unsplash.it/400?image=30", "image")
  ];
}

class Article {
  constructor(public title: string,
              public date: Date,
              public content: string,
              public kind: string) {
  }
}