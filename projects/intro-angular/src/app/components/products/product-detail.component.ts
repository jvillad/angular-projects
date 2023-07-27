import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/common/models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  pageTitle: string = 'Item Detail';
  product: IProduct | undefined;

  // dependency injection
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${productId}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
