import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  // determines the width of stars to display
  ngOnChanges(): void {
    this.cropWidth = (this.rating * 80) / 5;
  }
}
