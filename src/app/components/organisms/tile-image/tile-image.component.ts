import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-image',
  templateUrl: './tile-image.component.html',
  styleUrls: ['./tile-image.component.scss']
})
export class TileImageComponent implements OnInit {
  @Input() class : [];
  @Input() src : [];

  constructor() { }

  ngOnInit() {
  }

}
