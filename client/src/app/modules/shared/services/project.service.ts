import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProjectInterface {
  id: number;
  title: string;
  photo: string;
  description: string;
  summary: string;
  logo: string;
}

interface ResponseObject {
  data: Array<ProjectInterface>;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsSubject$: BehaviorSubject<Array<ProjectInterface>> =
    new BehaviorSubject<Array<ProjectInterface>>([]);
  projects$ = this.projectsSubject$.asObservable();

  constructor(private readonly http: HttpClient) {}

  publishProjects(projects: Array<ProjectInterface>) {
    this.projectsSubject$.next(projects);
  }

  getAllProjects() {
    return this.http.get<ResponseObject>('/api/projects/top-4');
  }
}
