import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmpservice1',
  templateUrl: './cmpservice1.component.html',
  styleUrls: ['./cmpservice1.component.scss']
})
export class Cmpservice1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public itemsList: Object[] = [
    {
      title: 'Masiva',
      description: ' Realizamos entregas masivas de forma personalizada como: ' +

      '<ul>' +
      '<li> Estados de cuenta </li>' + 
      '<li>Invitaciones a eventos </li>' + 
      '<li>Suscripciones a revistas o periódicos </li>' +
      '</ul>' +
     'Igualmente podemos hacer entregas que no requieren personalización como lo son:' +
     
     
      'Volantes' +
      'Muestras' +
      'Y todo tipo de material promocional'
    },
    {
      title: 'Programada',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.'
    },
    {
      title: 'Entrega Certificada',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.'
    }
  ];

}
