import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Runtribe } from '../runtribe';
@Component({
  selector: 'app-running-list',
  templateUrl: './running-list.component.html',
  styleUrls: ['./running-list.component.css'],
})
export class RunningListComponent {
  @Input() tribeList: Runtribe[] = [];
  results: Runtribe[] = [];
  @Output() selectedRunTribe = new EventEmitter<Runtribe>();
  searchRunGroups(searchText: string) {
    if (!searchText) return;
    this.results = this.tribeList.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  selectRunTribe(location: Runtribe) {
    this.selectedRunTribe.emit(location);
  }
}
