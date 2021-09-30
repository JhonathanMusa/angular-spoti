import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  resultsSearch: any[] = []
  isLoading = false

  constructor(private spotiSvc: SpotiService, private router: Router) {
   }


  onSearch(value: string) {
    this.isLoading = true
    console.log(value);
    this.spotiSvc.searchArtists(value).subscribe(res => {
      console.log(res);
      this.resultsSearch = res
      this.isLoading = false
    })
  }


  viewArtist(id: string) {
    this.router.navigate(['/artist', id])
  }


}
