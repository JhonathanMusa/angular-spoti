import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpotiService {
  baseUrl: string = environment.baseAPiUrl

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `${this.baseUrl}${query}`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAcjGakD1UEoVOPL7OoiiU6va3h0tVnPe_NKyFvtmfzx7D6U7URUGyHnO3zU6tgcuR3EUyEe77FFV6Wwlk'
    })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res: any) => res.albums.items)
    )
  }

}
