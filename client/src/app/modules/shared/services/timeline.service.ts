import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtility } from './utils';

export interface TimelineDTO {
  _id?: string;
  location: string;
  roleOffered: string;
  organization: string;
  timeDuration: string;
  workDescription: string;
}

export interface TimelineReceivedInterface<T> {
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  constructor(private http: HttpClient) {}

  getAllTimelines(): Observable<TimelineReceivedInterface<Array<TimelineDTO>>> {
    return this.http.get<TimelineReceivedInterface<Array<TimelineDTO>>>(
      '/api/timelines/all'
    );
  }

  createNewTimeline(payload: Partial<TimelineDTO>) {
    return this.http.post('/api/timelines/create', payload, {
      headers: ServiceUtility.getXpiKeyFromLocalStorage(),
    });
  }

  updateNewTimeline(payload: Partial<TimelineDTO>) {
    return this.http.patch('/api/timelines/update', payload, {
      headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      params: { id: payload._id || '' },
    });
  }

  deleteTimelineById(id: string) {
    return this.http.delete('/api/timelines/delete', {
      headers: ServiceUtility.getXpiKeyFromLocalStorage(),
      params: { id },
    });
  }
}
