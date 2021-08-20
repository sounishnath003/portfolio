import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeService {
  constructor(private http: HttpClient) {}

  getAllProjectTypes() {
    return this.http.get(environment.API_URL + '/project-type/all');
  }

  createNewProjectType(payload: any) {
    return this.http.post(
      environment.API_URL + '/project-type/create',
      payload
    );
  }
}
