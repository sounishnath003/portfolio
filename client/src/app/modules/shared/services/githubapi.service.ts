import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepositoryInterface } from './utils';

@Injectable({
  providedIn: 'root',
})
export class GithubapiService {
  private GITHUB_API = 'https://api.github.com/users/sounishnath003';

  constructor(private http: HttpClient) {}

  getRepository() {
    return this.http.get<Array<RepositoryInterface>>(
      `${this.GITHUB_API}/repos`
    );
  }
}
