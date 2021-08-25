import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getAllProjectTypes() {
    return this.http.get('/api/project-type/all');
  }

  createNewProjectType(payload: any) {
    const resp$ = this.http.post('/api/project-type/create', payload);
    this.refreshNeeded$.next(true);
    return resp$;
  }

  updatedProjectType(projectType: any) {
    const projectId: string = projectType._id;
    this.formatPayloadReceived(projectType);
    return this.http
      .put(`/api/project-type/update/${projectId}`, projectType)
      .pipe(
        map(() => {
          this.refreshNeeded$.next(true);
          return this.getAllProjectTypes();
        })
      );
  }

  private formatPayloadReceived(rawFormData: any) {
    delete rawFormData['_id'];
    delete rawFormData['__v'];
  }
}
