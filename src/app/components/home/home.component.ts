import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[] = []

  constructor(private spotiSvc: SpotiService, private router: Router) { }

  ngOnInit(): void {
    this.spotiSvc.getNewReleases().subscribe(res => {
      console.log(res);
      this.releases = res
    })
  }

  viewAlbum(id:string){
    console.log(id);
    this.router.navigate(["/album", id])
  }

}
