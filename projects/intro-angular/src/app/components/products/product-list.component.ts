import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../common/models/product.interface';
import { ProductSerivce } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductSerivce],
})
export class ProductListComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  // ProductService Injection
  constructor(private productService: ProductSerivce) {}
  pageTitle: string = 'Coffee List';
  showImage: boolean = false;
  sub!: Subscription;
  // private backing variable
  private _listFilter: string = '';
  // getter
  get listFilter(): string {
    return this._listFilter;
  }
  // setter
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  // Sample hardcoded data below
  products: IProduct[] = [];

  // filter the list of products
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    // determine if the input is in products
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // async operation
    this.sub = this.productService.getProducts().subscribe({
      // notifications
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
