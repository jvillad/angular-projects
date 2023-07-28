import { Component } from '@angular/core';
import { Runtribe } from './runtribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'runtribe';

  runTribeList: Runtribe[] = [
    {
      name: 'ACME Run Tribe',
      city: 'Sydney',
      state: 'NSW',
      postcode: '2065',
      imageUrl:
        'https://img.freepik.com/free-vector/cute-people-running_138676-3302.jpg?w=740&t=st=1690517278~exp=1690517878~hmac=ffe58399f2823ab62c8885b007c18345e9350c93003f887ba7cf9dce61d13a59',
      paidMembership: false,
    },
    {
      name: 'Worst Run Tribe',
      city: 'Sydney',
      state: 'NSW',
      postcode: '2065',
      imageUrl:
        'https://img.freepik.com/free-vector/cute-people-running_138676-3302.jpg?w=740&t=st=1690517278~exp=1690517878~hmac=ffe58399f2823ab62c8885b007c18345e9350c93003f887ba7cf9dce61d13a59',
      paidMembership: true,
    },
  ];

  selectedRunTribe: Runtribe | undefined;

  updateSelectedRunGroup(location: Runtribe) {
    this.selectedRunTribe = location;
  }
}
