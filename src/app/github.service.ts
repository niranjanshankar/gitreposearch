import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  // observing response to tap into the response headers for pagination
  // Limiting to 15 response per page. This call returns first page by default
  public getRepositoriesByUsername(userName: string): Observable<any> {
    return this.http.get(this.apiUrl + '/users/' + userName + '/repos?per_page=15', { observe: 'response' });
  }

  // observing response to tap into the response headers for pagination
  public getRepositories(url: string): Observable<any> {
    return this.http.get(url, { observe: 'response' });
  }

  public getContributorsByRepoName(owner: string, repo: string): Observable<any> {
    return this.http.get(this.apiUrl + '/repos/' + owner + '/' + repo + '/contributors');
  }
}
