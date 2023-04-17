import { Component, OnInit } from '@angular/core';
import { IProduct } from '../common/models/product.interface';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Coffee List';
  showImage: boolean = false;
  listFilter: string = 'coffee';

  // Sample hardcoded data below
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Morning Boost Blend',
      productCode: 'MBB-002',
      productBrewDate: 'April 1, 2023',
      productDescription:
        'A medium bodied blend of high-quality beans from Central and South America with a bright acidity and notes of caramel and citrus, perfect for starting your day',
      productPrice: 20.99,
      productRating: 4.7,
      productImageUrl: 'assets/images/mbb_002.jpg',
    },
    {
      productId: 5,
      productName: 'The OG Blend',
      productCode: 'TOB-005',
      productBrewDate: 'April 1, 2023',
      productDescription:
        'The original blend. Bold and earthy coffee with notes of dark chocolate and spice!',
      productPrice: 22.93,
      productRating: 4.9,
      productImageUrl: 'assets/images/tob_005.jpg',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
