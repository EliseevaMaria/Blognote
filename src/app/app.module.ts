import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RegisterComponent } from './authorization/register/register.component';
import { ConfirmPasswordValidator } from './authorization/utility/confirm-password.validator';
import { LoginComponent } from './authorization/login/login.component';
import { AuthCallbackComponent } from './authorization/auth-callback/auth-callback.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorListItemComponent } from './authors/author-list-item/author-list-item.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { ShortenPipe } from './utility/shorten.pipe';
import { ArticleListItemComponent } from './articles/article-list-item/article-list-item.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { AuthorHeaderComponent } from './articles/author-header/author-header.component';
import { ArticleBlockComponent } from './articles/article-details/article-block/article-block.component';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './utility/filter.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleFooterComponent } from './articles/article-details/article-footer/article-footer.component';
import { EditArticleComponent } from './articles/article-details/edit-article/edit-article.component';
import { DropdownDirective } from './utility/dropdown.directive';
import { ErrorComponent } from './error/error.component';
import { EditProfileComponent } from './authors/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleListComponent,
    AuthorListComponent,
    AuthorListItemComponent,
    AuthorDetailsComponent,
    ShortenPipe,
    ArticleListItemComponent,
    ArticleDetailsComponent,
    AuthorHeaderComponent,
    ArticleBlockComponent,
    AboutComponent,
    FilterPipe,
    RegisterComponent,
    ConfirmPasswordValidator,
    LoginComponent,
    AuthCallbackComponent,
    WelcomeComponent,
    ArticleFooterComponent,
    EditArticleComponent,
    DropdownDirective,
    ErrorComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
