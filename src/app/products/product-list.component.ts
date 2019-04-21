import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
@Component({ 
    selector:'pm-products',
    templateUrl:'./product-list.component.html' ,
    styleUrls:['./product-list.component.css']
  
  })

export class ProductListComponent implements OnInit{
  imageWidth:number=50;
imageMargin:number=2;
listFilter:string='cart';
pageTitle:string='PRODUCT LIST';
showImage :boolean =false;


toggleImage(): void {
  this.showImage = !this.showImage;
}

    products: IProduct[]=[


        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://rukminim1.flixcart.com/image/612/612/jsuoivk0/smart-band-tag/w/f/p/crs-b19-honor-original-imafec5qpztyn4pe.jpeg"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://rukminim1.flixcart.com/image/704/704/j0r0rrk0/smartwatch/5/j/n/hin02-bk-healthin-original-imaek6zkmsnz9hgy.jpeg"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://rukminim1.flixcart.com/image/704/704/jc9egsw0/home-security-camera/b/5/p/d606-360-original-imafffkkkk2dqsux.jpeg"
          },
          {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "https://rukminim1.flixcart.com/image/704/704/smart-glass/f/4/r/tg418-goglesourcing-original-imaep7hfvduwzk8q.jpeg"
          },
          {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://rukminim1.flixcart.com/image/704/704/jmkwya80/home-security-camera/q/d/g/cp-gtc-d24l2-v3-cp-plus-original-imaf9gn8t7kgmkhz.jpeg"
          }
        
    ];

    ngOnInit():void{

      console.log('In OnInit');
    }
    
}
