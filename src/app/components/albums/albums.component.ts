import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiService } from 'src/app/services/spoti.service';
import { Location } from "@angular/common"

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album: any = {}
  isLoading: boolean;

  constructor(private spoti: SpotiService, private activatedRoute: ActivatedRoute, private location: Location) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.spoti.getAlbumById(id).subscribe(res => {
        console.log(res);
        this.album = res
        this.isLoading = false;
      })
    })
  }

  onGoBack() {
    this.location.back()
  }

}
