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
      'Authorization': 'Bearer BQBSOuf0rF3VjSsfLpvRh5bgCNcD0ssWpSXWL1XKcDjZ328vx8TUfWnsbZ7CrtvqSdbZTV_yOkfy27fa7wU'
    })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res: any) => res.albums.items)
    )
  }

  searchArtists(search: string) {
    return this.getQuery(`search?query=${search}&type=artist&offset=0&limit=20`).pipe(
      map((res: any) => {
        return res.artists.items
      }
      )
    )
  }

  getArtistById(id: string) {
    return this.getQuery(`artists/${id}`)
  }


  getAlbumById(id: string) {
    return this.getQuery(`albums/${id}`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((res: any) => {
        return res.tracks
      })
    )
  }

}


