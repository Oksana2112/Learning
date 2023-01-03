import { Component } from '@angular/core';
import { Adress } from './models/adress.model';
import { Pacient } from './models/pacient.model';
import { Sex } from './models/sex.enum';

@Component({
  selector: 'med-card',
  templateUrl: './med-card.component.html',
  styleUrls: ['./med-card.component.scss']
})
export class MedCardComponent {
  pacient!:Pacient;
  
 constructor(){
  let adress=new Adress('Ternopil','15 Kvitnia',31,26);
  this.pacient=new Pacient('Іванов Іван Петрович',new Date(1990,8,12),Sex.Male,1,'Rh+',81,new Date(),adress);

  
}

}
