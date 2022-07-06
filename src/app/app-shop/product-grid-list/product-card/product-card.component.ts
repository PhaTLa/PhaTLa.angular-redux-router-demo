import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit,OnChanges {

  @Input() item?: Product;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['item']!=null){
      this.item = changes['item'].currentValue;
    }
  }

  ngOnInit(): void {
  }

  onClick(){
    
  }

}
