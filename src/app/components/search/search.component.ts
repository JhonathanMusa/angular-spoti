import { Component, OnInit } from '@angular/core';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultsSearch: any[] = []

  constructor(private spotiSvc: SpotiService) { }

  ngOnInit(): void {

  }

  onSearch(value: string) {
    console.log(value);
    this.spotiSvc.searchArtist(value).subscribe(res => {
      console.log(res);
      this.resultsSearch = res

    })
  }

}
