import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.scss']
})
export class BonusesComponent implements OnInit {
  @Input()model:any;
  constructor() { }

  ngOnInit() {
  }

}
