import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = {}
  artistTopTracks: any[] = []
  artistId!: string;
  isLoading = false

  constructor(private activatedRoute: ActivatedRoute, private spoti: SpotiService, private router: Router) {
    this.isLoading = true;
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.artistId = res.id;
    })

    this.getArtist()
    this.topTracks()
    this.isLoading = false
  }

  getArtist() {
    this.spoti.getArtistById(this.artistId).subscribe(res => {
      console.log(res);
      this.artist = res
    })
  }

  topTracks() {
    this.spoti.getTopTracks(this.artistId).subscribe(res => {
      console.log(res);
      this.artistTopTracks = res
    });

  }

  viewAlbum(id: string) {
    this.router.navigate(["/album", id])
  }



}
