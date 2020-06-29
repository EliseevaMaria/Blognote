import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { AuthorsService } from './authors.service';
import { ArticleBlock } from '../models/article-block.model';
import { ArticleBlockType } from '../models/article-block-type.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: Article[] = [
    new Article("1", "How to learn Angular", "several words about the article", this.authorsService.getAuthorById(0), [
      new ArticleBlock("Block 1",
          "Open any Angular guide and start practicing.",
          ArticleBlockType.Text),
      new ArticleBlock(null,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
        ArticleBlockType.Image),
      new ArticleBlock("Lorem ipsum block",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ArticleBlockType.Text),
      new ArticleBlock(null,
        "A wise saying here.",
        ArticleBlockType.Quote),
      new ArticleBlock("Thanks for reading",
          null,
          ArticleBlockType.Text),
    ]),
    new Article("2", "How to learn Angular 2.0", "several words about the article", this.authorsService.getAuthorById(1), [
      new ArticleBlock("Block 1",
          "Open any Angular guide and start practicing.",
          ArticleBlockType.Text),
      new ArticleBlock(null,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
        ArticleBlockType.Image),
      new ArticleBlock("Lorem ipsum block",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ArticleBlockType.Text),
      new ArticleBlock(null,
        "A wise saying here.",
        ArticleBlockType.Quote),
      new ArticleBlock("Thanks for reading",
          null,
          ArticleBlockType.Text),
    ]),
  ];

   constructor(private authorsService: AuthorsService) { }

   getArticles() {
     return this.articles.slice();
   }
}