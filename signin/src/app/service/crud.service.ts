import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  post(url: string, body: JSON): any {
    console.log(url);
    return this.http.post(url, body).subscribe(data => {console.log(data)});
    //return 'posted';
  }

  get(url: string): Observable<any> {
    const resp = this.http.get(url).pipe(
      map((data: any) => {
          return data;
        }
      )
    );

    return resp;
  }
}
