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

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  public searchUserRepositories(): void {
    this.isError = false;
    this.githubService.getRepositoriesByUsername(this.searchTerm.trim()).subscribe(res => {
      this.repositories = res;
    }, err => {
      this.isError = true;
    });
  }

}
