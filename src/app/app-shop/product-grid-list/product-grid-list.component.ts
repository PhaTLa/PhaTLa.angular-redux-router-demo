import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.css']
})
export class ProductGridListComponent implements OnInit,OnChanges {

  @Input() data?: Array<Product>;
  @Output() add = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'] != null){
      this.data = changes['data'].currentValue;
    }else{
      this.data = [];
    }
  }

  ngOnInit(): void {
  }

  onAddProductToCart(productId: number) {
    this.add.emit(productId)
  }


}
