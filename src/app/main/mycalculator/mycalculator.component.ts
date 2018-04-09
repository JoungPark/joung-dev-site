import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-mycalculator',
  templateUrl: './mycalculator.component.html',
  styleUrls: ['./mycalculator.component.css'],
  animations: [routerTransition()]
})
export class MycalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.calcaulate();
  }

  distance1 = 10;
  oilprice1 = 149;
  ratio1 = 7;

  cost = 0;
  liter = 0;
  
  onkeyUp(distance, ratio, oilprice) {
    this.liter = +(distance / ratio).toFixed(2);
    this.cost = +(distance / ratio * oilprice / 100).toFixed(2);
  }

  calcaulate() {
    this.liter = +(this.distance1 / this.ratio1).toFixed(2);
    this.cost = +(this.liter * this.oilprice1 / 100).toFixed(2);
  }
}
