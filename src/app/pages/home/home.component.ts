import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public svg: SafeHtml;

  public timeline = [{
    id: 0,
    left:[{
      displayAs: 'primary',
      type: 'text',
      title: 'Identifier vos leviers & thématiques d’innovation'
    }],
    right:[{
      displayAs: 'secondary',
      type: 'list',
      title: null,
      values: [
        'Immersion & synthèse : dresser un état des lieux des parties prenantes internes et externes(clients, partenaires, concurrents…)',
        'Executive workshop : challenger & prioriser les thématiques et leviers identifiés',
        'Crowthinking workshop : concrétiser tout de suite les pistes identifiées.',
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
            'Identifier le  bon format d’idéation(crowdthinking, boost - camp, Foreseeds…)',
            'Définir les critères d’évaluation & de sélection des idées',
            'Animer les ateliers ou la plateforme en ligne(facilitateurs ou community managers)',
            'Synthétiser la matière issues des ateliers / plateformes.'
          ]
        },
        {
          displayAs: 'secondary',
          logo: '/assets/images/Foreseeds_Logo.png'
        }
      ],
      right: [{
        displayAs: 'primary',
        type: 'text',
        title: 'Animer un challenge d’idéation'
      }],
    },
    {
      id: 2,
      left: [{
        displayAs: 'primary',
        type: 'text',
        title: 'Convertir une idée a un MVP en moins de 3 mois'
      }],
      right: [{
        displayAs: 'secondary',
        type: 'list',
        title: null,
        values: [
          'Définir la vision produit(problème, value proposition, cibles & business model)',
          'Formuler les hypothèses et les prototypes permettant de les tester',
          'Rédiger le backlog priorisé et le développer en sprint Agile',
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
          'Définition de la gouvernance de suivi & financement des projets(Growth boards)',
          'Formalisation et animation du framework de coaching des équipes',
          'Mise à disposition des compétences clés nécessaires aux projets',
          'Animation du réseau interne et externe d’intrapreneurs et partenaires(think tank)',
        ]
      }],
      right: [{
        displayAs: 'primary',
        type: 'text',
        title: '« Scaler » votre démarche intrapreneuriale'
      }],
    },
  ];

  public testimonials = [
    {
      id: 0,
      illustration: null,
      value: 'Je perds des parts de marché face à des jeunes entrants / startups, innover d’accord, mais par où commencer ?'
    },
    {
      id: 0,
      illustration: null,
      value: "J'ai une idée de produit et service, mais il me manque les moyens / la méthodologie pour la faire aboutir."
    },
    {
      id: 0,
      illustration: null,
      value: "Nous avons de nombreuses idées émanant des salariés, mais nous ne savons pas les exploiter."
    },
  ]
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.svg = this.sanitizer.bypassSecurityTrustHtml("");
  };


}
