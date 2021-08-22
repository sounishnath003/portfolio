import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeService {
  constructor(private http: HttpClient) {
  }

  getAllProjectTypes() {
    return this.http.get('/api/project-type/all');
  }

  createNewProjectType(payload: any) {
    return this.http.post('/api/project-type/create', payload);
  }

  updatedProjectType(projectType: any) {
    const projectId: string = projectType._id;
    this.formatPayloadReceived(projectType);
    return this.http.put(`/api/project-type/update/${projectId}`, projectType);
  }

  private formatPayloadReceived(rawFormData: any) {
    delete rawFormData['_id'];
    delete rawFormData['__v'];
  }
}
