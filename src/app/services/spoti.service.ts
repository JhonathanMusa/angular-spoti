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
      'Authorization': 'Bearer BQA-pmI5NinTBVRPQMPFTGgaXDQ8XXweJfybBZ7OFl6ur98i9d6yG9Sa06Nlhqkr19POcja_pO_a7zeGC-M'
    })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res: any) => res.albums.items)
    )
  }

  searchArtist(search: string) {
    return this.getQuery(`search?query=${search}&type=artist&offset=0&limit=20`).pipe(
      map((res: any) => {
        return res.artists.items
      }
      )
    )
  }

}
