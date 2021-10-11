import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceUtility } from './utils';

export interface ProjectInterface {
  _id: string;
  title: string;
  photo: string;
  description: string;
  summary: string;
}

interface ResponseObject {
  data: Array<ProjectInterface>;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private readonly http: HttpClient) {}

  private static formatPayloadReceived(rawFormData: any) {
    delete rawFormData['_id'];
    delete rawFormData['__v'];
  }

  getAllProjects() {
    return this.http.get<ResponseObject>(
      `${environment.API_URL}/api/projects/top-4`
    );
  }

  getProjectById(_id: string): Observable<{ data: ProjectInterface }> {
    return this.http.get<{ data: ProjectInterface }>(
      `${environment.API_URL}/api/projects/search`,
      {
        params: { id: _id },
      }
    );
  }

  public createNewProjectRecord(rawFormData: any) {
    ProjectService.formatPayloadReceived(rawFormData);
    return this.http.post<ProjectInterface>(
      `${environment.API_URL}/api/projects/create`,
      rawFormData,
      { headers: ServiceUtility.getXpiKeyFromLocalStorage() }
    );
  }

  public updateProjectRecord(rawFormData: ProjectInterface) {
    return this.http.put<ProjectInterface>(
      `${environment.API_URL}${environment.API_URL}/api/projects/update/${rawFormData._id}`,
      rawFormData,
      { headers: ServiceUtility.getXpiKeyFromLocalStorage() }
    );
  }

  public deleteProjectRecord(_id: string) {
    return this.http.delete(
      `${environment.API_URL}/api/projects/delete/${_id}`,
      {
        headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      }
    );
  }
}
