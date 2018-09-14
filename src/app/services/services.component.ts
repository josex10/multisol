import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color:string = 'jello';
  animationCls1 : string = '';
  animationCls2 : string = '';
  animationCls3 : string = '';
  animationCls4 : string = '';
  animationCls5 : string = '';
  animationCls6 : string = '';
  changeStyle($event, serviceNumber){
    if(serviceNumber == 1 ){
      this.animationCls1 = $event.type == 'mouseover' ? 'pulse' : 'wooble';
    }else if(serviceNumber == 2){
      this.animationCls2 = $event.type == 'mouseover' ? 'pulse' : 'wooble';
    }else if(serviceNumber == 3){
      this.animationCls3 = $event.type == 'mouseover' ? 'pulse' : 'wooble';
    }else if(serviceNumber == 4){
      this.animationCls4 = $event.type == 'mouseover' ? 'pulse' : 'wooble';
    }else if(serviceNumber == 5){
      this.animationCls5 = $event.type == 'mouseover' ? 'pulse' : 'wooble';
    }else if(serviceNumber == 6){
      this.animationCls6 = $event.type == 'mouseover' ? 'pulse' : 'wooble';
    }
  }


  public itemsList:Object[] = [
      {
          title: 'Collapsible Group Item #1',
          description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
      },
      {
          title: 'Collapsible Group Item #2',
          description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
      },
      {
          title: 'Collapsible Group Item #3',
          description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
      }
  ]

}
