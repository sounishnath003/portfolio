import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  headers = new HttpHeaders({
    'x-api-key': JSON.parse(window.localStorage.getItem('xApiKey') as string),
  });
  constructor(private readonly http: HttpClient) {}

  private static formatPayloadReceived(rawFormData: any) {
    delete rawFormData['_id'];
    delete rawFormData['__v'];
  }

  getAllProjects() {
    return this.http.get<ResponseObject>('/api/projects/top-4', {
      headers: this.headers,
    });
  }

  public createNewProjectRecord(rawFormData: any) {
    ProjectService.formatPayloadReceived(rawFormData);
    return this.http.post<ProjectInterface>(
      `/api/projects/create`,
      rawFormData,
      { headers: this.headers }
    );
  }

  public updateProjectRecord(rawFormData: ProjectInterface) {
    return this.http.put<ProjectInterface>(
      `/api/projects/update/${rawFormData._id}`,
      rawFormData,
      { headers: this.headers }
    );
  }

  public deleteProjectRecord(_id: string) {
    return this.http.delete(`/api/projects/delete/${_id}`, {
      headers: this.headers,
    });
  }
}
