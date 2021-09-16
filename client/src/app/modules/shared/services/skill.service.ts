import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  deleteSkillService(skillId: string) {
    return this.http.delete(`/api/skills/delete/${skillId}`);
  }

  getAllSkillsForCms() {
    return this.http
      .get('/api/skills/all', { params: { forcms: true } })
      .pipe(map((data: any) => data.data.skills));
  }

  getAllParentSkillNodes() {
    return this.http.get('/api/skills/all').pipe(
      map((resp: any) => {
        return resp.data.skillParentNodes;
      })
    );
  }

  getSkillsetsCollections() {
    return this.http.get('/api/skills/all').pipe(
      map((resp: any) => {
        return resp.data.skillsetCollections;
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
