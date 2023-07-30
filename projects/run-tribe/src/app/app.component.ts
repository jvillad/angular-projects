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
      name: 'Sydney Run Tribe',
      city: 'Sydney',
      state: 'NSW',
      postcode: '2065',
      imageUrl:
        'https://img.freepik.com/free-vector/cute-people-running_138676-3302.jpg?w=740&t=st=1690517278~exp=1690517878~hmac=ffe58399f2823ab62c8885b007c18345e9350c93003f887ba7cf9dce61d13a59',
      paidMembership: false,
      description:
        'Sydney Run Tribe is a community of passionate runners in Sydney, New South Wales. We organize regular running events and meetups for runners of all levels. Join us to explore beautiful running trails and enjoy the camaraderie of fellow runners!',
    },
    {
      name: 'Melbourne Run Tribe',
      city: 'Melbourne',
      state: 'VIC',
      postcode: '2065',
      imageUrl:
        'https://img.freepik.com/free-vector/cute-people-running_138676-3302.jpg?w=740&t=st=1690517278~exp=1690517878~hmac=ffe58399f2823ab62c8885b007c18345e9350c93003f887ba7cf9dce61d13a59',
      paidMembership: true,
      description: `Welcome to Melbourne Run Tribe, a vibrant community of runners in Melbourne, Victoria. Whether you're a beginner or a seasoned marathoner, our group offers a supportive environment to achieve your running goals. We organize various running events and training sessions for our members.`,
    },
  ];

  selectedRunTribe: Runtribe | undefined;

  updateSelectedRunGroup(location: Runtribe) {
    this.selectedRunTribe = location;
  }
}
