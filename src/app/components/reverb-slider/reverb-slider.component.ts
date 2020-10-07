import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverb-slider',
  templateUrl: './reverb-slider.component.html',
  styleUrls: ['./reverb-slider.component.css']
})
export class ReverbSliderComponent implements OnInit {

  isReverbViewable: boolean;
  constructor() { }

  ngOnInit(): void {
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
