import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  // could use interface to model this
  @Input() repo: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public gotoContributorsPage(): void {
    this.router.navigateByUrl('/contributors/' + this.repo.owner.login + '/' + this.repo.name);
  }

}
