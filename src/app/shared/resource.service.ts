import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResourceService {

  constructor(private http: HttpClient) { }

  getResources<T>(url: string, property: string): Observable<T[]> {
    return this.http.get<T[]>(url).pipe(
      map((collection: T[]) => {
        return collection.map((data) => data[property]);
      })
    );
  }
}
