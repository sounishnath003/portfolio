import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeService {
  constructor(private http: HttpClient) {}

  getAllProjectTypes() {
    return this.http.get('/api/project-type/all');
  }

  createNewProjectType(payload: any) {
    return this.http.post('/api/project-type/create', payload);
  }

  updatedProjectType(projectType: any) {
    return this.http.put(`/api/project-type/update/${projectType._id}`, {
      projectType,
    });
  }
}
