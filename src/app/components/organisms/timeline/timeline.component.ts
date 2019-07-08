import { Component, OnInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() elements:any;
  element = document.getElementsByClassName('saegus-timeline');
  blocks = document.getElementsByClassName("cd-timeline__block");
  
  constructor() { }

  bouncing = () => {
    let self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (self.blocks[i].classList.contains("cd-timeline--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight) {
          self.blocks[i].classList.add("cd-timeline--bounce-in");
          self.blocks[i].classList.remove("cd-timeline--hidden");
        }
        if (document.getElementsByClassName('cd-timeline--bounce-in').length == self.blocks.length) window.removeEventListener('scroll', self.bouncing, true);
      })(i);
    };
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', this.bouncing, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.bouncing, true);
  }

  ngOnInit() {}
}
