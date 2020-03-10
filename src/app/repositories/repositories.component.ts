import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  public searchTerm = '';
  // Could use an interface to model the response
  public repositories: Array<Object>;
  public isError: boolean;
  // Could be moved to a separate interface
  public pages: Array<{
    url: string;
    title: string;
  }>;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  public searchUserRepositories(): void {
    this.isError = false;
    this.githubService.getRepositoriesByUsername(this.searchTerm.trim()).subscribe(response => {
      this.buildReposAndPagination(response);
    }, err => {
      this.isError = true;
    });
  }

  public getRepositories(url: string): void {
    this.githubService.getRepositories(url).subscribe(response => {
      this.buildReposAndPagination(response);
    }, err => {
      this.isError = true;
    });
  }

  private buildReposAndPagination(response): void {
    this.repositories = response.body;

    // generate pagination based on the response header
    const str = response.headers.get('link');
    if (str && str !== null) {
      this.buildPaginationButtons(str);
    }
  }

  // This method parses the response header "links" and
  // build the object that is used for pagination buttons
  // Reference: https://www.youtube.com/watch?v=5QlE6o-iYcE
  private buildPaginationButtons(str: string): void {
    const links = str.split(',');
    const urls = links.map(link => {
      // Hack to remove unwanted string elements
      // If there was time, this could be replaced by REGEX
      return {
        url: link.split(';')[0].replace('<', '').replace('>', '').trim(),
        title: link.split(';')[1].replace('rel="', '').replace('"', '').trim()
      };
    });
    this.pages = urls;
  }

}
