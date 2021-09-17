import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeService {
  private refreshNeeded$: BehaviorSubject<boolean>;
  headers = new HttpHeaders({
    'x-api-key': JSON.parse(window.localStorage.getItem('xApiKey') as string ),
  });

  constructor(private http: HttpClient) {
    this.refreshNeeded$ = new BehaviorSubject<boolean>(true);
    this.refreshNeeded$.next(true);
  }

  get refreshNeededState() {
    return this.refreshNeeded$.asObservable();
  }

  private static formatPayloadReceived(rawFormData: any) {
    delete rawFormData['_id'];
    delete rawFormData['__v'];
  }

  getAllProjectTypes() {
    return this.http.get('/api/project-type/all', { headers: this.headers });
  }

  createNewProjectType(payload: any) {
    ProjectTypeService.formatPayloadReceived(payload);
    const resp$ = this.http
      .post('/api/project-type/create', payload, { headers: this.headers })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
    this.refreshNeeded$.next(true);
    return resp$;
  }

  updatedProjectType(projectType: any) {
    const projectId: string = projectType._id;
    ProjectTypeService.formatPayloadReceived(projectType);
    return this.http
      .put(`/api/project-type/update/${projectId}`, projectType, {
        headers: this.headers,
      })
      .pipe(
        map(() => {
          this.refreshNeeded$.next(true);
          return this.getAllProjectTypes();
        })
      );
  }

  deleteProjectType(projectId: string) {
    return this.http.delete(`/api/project-type/delete/${projectId}`, {
      headers: this.headers,
    });
  }
}
