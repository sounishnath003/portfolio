import { HttpHeaders } from '@angular/common/http';

export class ServiceUtility {
  static getXpiKeyFromLocalStorage(): HttpHeaders {
    const header = new HttpHeaders({
      'x-api-key':
        JSON.parse(window.localStorage.getItem('xApiKey') as string) || '',
    });
    return header;
  }
}
