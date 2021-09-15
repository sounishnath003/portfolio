import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  getAllParentSkillNodes() {
    return this.http.get('/api/skills/all').pipe(
      map((resp: any) => {
        return resp.data.skillParentNodes;
      })
    );
  }

  createNewSkillRecord(formData: { skill: string; parentSkillId: string }) {
    const payload = {
      skill: formData.skill,
      parentSkillId:
        formData.parentSkillId === 'null' ? null : formData.parentSkillId,
    };

    return this.http.post('/api/skills/create', payload).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
