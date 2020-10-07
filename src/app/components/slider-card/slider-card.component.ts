import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.css']
})
export class SliderCardComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void{
  }

  someValue = .5;
  autoTicks = true;
  disabled = false;
  invert = false;
  max = 1;
  min = 0;
  showTicks = false;
  step = .1;
  thumbLabel = false;
  value = .5;
  vertical = false;
  tickInterval = 1;
  
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

}
