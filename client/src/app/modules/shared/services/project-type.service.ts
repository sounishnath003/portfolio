import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServiceUtility } from './utils';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeService {
  private refreshNeeded$: BehaviorSubject<boolean>;

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
    return this.http.get('/api/project-type/all');
  }

  createNewProjectType(payload: any) {
    ProjectTypeService.formatPayloadReceived(payload);
    const resp$ = this.http
      .post('/api/project-type/create', payload, { headers: ServiceUtility.getXpiKeyFromLocalStorage() })
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
        headers: ServiceUtility.getXpiKeyFromLocalStorage(),
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
      headers: ServiceUtility.getXpiKeyFromLocalStorage(),
    });
  }
}
