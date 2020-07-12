import { Author } from './author.model';
import { ArticleBlock } from './blocks/article-block.model';

export class Article {

  public author: Author = new Author("", "", "", "", "");

  constructor(public id: string,
    public name: string, public annotation: string,
    public creationDate: Date, public articleBlocks: ArticleBlock[]) { }

  copy(source: Article) {
    for (let key of Object.keys(source)) {
      this[key] = source[key];
    }
  }

}
