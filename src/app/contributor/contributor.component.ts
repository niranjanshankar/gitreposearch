import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {

  @Input() contributor: any;

  constructor() { }

  ngOnInit() {
  }

}
