import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public svg: SafeHtml;

  public environnement = environment;
  public timeline = [{
    id: 0,
    left:[{
      displayAs: 'primary',
      type: 'text',
      title: 'layer#4.timeline#1.left.title'
    }],
    right:[{
      displayAs: 'secondary',
      type: 'list',
      title: null,
      values: [
        'layer#4.timeline#1.right.list#1',
        'layer#4.timeline#1.right.list#2',
        'layer#4.timeline#1.right.list#3',
      ]
    }]
    },
    {
      id: 1,
      left: [
        {
          displayAs: 'secondary',
          type: 'list',
          title: null,
          values: [
            'layer#4.timeline#2.left.list#1',
            'layer#4.timeline#2.left.list#2',
            'layer#4.timeline#2.left.list#3',
            'layer#4.timeline#2.left.list#4',
          ]
        },
        {
          displayAs: 'secondary',
          logo: this.environnement.production ? 'assets/images/Foreseeds_Logo.png' : '/assets/images/Foreseeds_Logo.png'
        }
      ],
      right: [{
        displayAs: 'primary',
        type: 'text',
        title: 'layer#4.timeline#2.right.title'
      }],
    },
    {
      id: 2,
      left: [{
        displayAs: 'primary',
        type: 'text',
        title: 'layer#4.timeline#3.left.title'
      }],
      right: [{
        displayAs: 'secondary',
        type: 'list',
        title: null,
        values: [
          'layer#4.timeline#3.right.list#1',
          'layer#4.timeline#3.right.list#2',
          'layer#4.timeline#3.right.list#3',
        ]
      }
    ]
    },
    {
      id: 1,
      left: [{
        displayAs: 'secondary',
        type: 'list',
        title: null,
        values: [
          'layer#4.timeline#4.left.list#1',
          'layer#4.timeline#4.left.list#2',
          'layer#4.timeline#4.left.list#3',
          'layer#4.timeline#4.left.list#4',
        ]
      }],
      right: [{
        displayAs: 'primary',
        type: 'text',
        title: 'layer#4.timeline#4.right.title'
      }],
    },
  ];

  public testimonials = [
    {
      id: 0,
      illustration: null,
      value: 'layer#2.testimonial#1.paragraph'
    },
    {
      id: 0,
      illustration: null,
      value: 'layer#2.testimonial#2.paragraph'
    },
    {
      id: 0,
      illustration: null,
      value: 'layer#2.testimonial#3.paragraph'
    },
  ]
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.svg = this.sanitizer.bypassSecurityTrustHtml("");
  };

  scroll(el: HTMLElement) {
    console.log(el)
    el.scrollIntoView({ behavior: "smooth" });
  }


}
