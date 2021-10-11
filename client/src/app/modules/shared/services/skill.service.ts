import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServiceUtility } from './utils';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  deleteSkillService(skillId: string) {
    return this.http.delete(
      `${environment.API_URL}/api/skills/delete/${skillId}`,
      {
        headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      }
    );
  }

  getAllSkillsForCms() {
    return this.http
      .get(`${environment.API_URL}/api/skills/all`, {
        params: { forcms: true },
      })
      .pipe(map((data: any) => data.data.skills));
  }

  getAllParentSkillNodes() {
    return this.http
      .get(`${environment.API_URL}/api/skills/all`, {
        headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      })
      .pipe(
        map((resp: any) => {
          return resp.data.skillParentNodes;
        })
      );
  }

  getSkillsetsCollections() {
    return this.http
      .get(`${environment.API_URL}/api/skills/all`, {
        headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      })
      .pipe(
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

    return this.http
      .post(`${environment.API_URL}/api/skills/create`, payload, {
        headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
