import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() description: string = '';
  cropWidth: number = 75;
  popup: Boolean = false;
  // @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  // determines the width of stars to display
  ngOnChanges(): void {
    this.cropWidth = (this.rating * 80) / 5;
  }

  // on click event handler
  onClick(): void {
    this.popup = true;
  }

  // onrRatingClicked(message: string): void {
  //   this.ratingClicked.emit(`Item has ${this.rating}`);
  // }
}
