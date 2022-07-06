import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Product from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-app-shop',
  templateUrl: './app-shop.component.html',
  styleUrls: ['./app-shop.component.css']
})
export class AppShopComponent implements OnInit, AfterViewInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService,
    private toast: ToastrService) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.productService.getBooks().subscribe({
      next: (value) => {
        console.log(value);
        this.products = value;
        this.toast.success('Success retrieve data!','SUCCESS',{timeOut:3000});
      },
      error: (error) => {
        console.log(error);
        this.toast.error('Retrieve data fail!','ERROR',{timeOut:3000});
      }
    });
  }

}
