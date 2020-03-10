import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  // Could use an interfae to model this
  public contributors: Array<any>;
  public repo: string;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.repo = params.repo;
      this.githubService.getContributorsByRepoName(params.owner, params.repo).subscribe(res => {
        this.contributors = res;
      });
    });
  }

}
