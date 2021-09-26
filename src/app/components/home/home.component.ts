import { Component, OnInit } from '@angular/core';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[] = []

  constructor(private spotiSvc: SpotiService) { }

  ngOnInit(): void {
    this.spotiSvc.getNewReleases().subscribe(res => {
      console.log(res);
      this.releases = res
    })
  }

}
