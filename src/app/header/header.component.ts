import { Component, OnInit, Renderer2,ElementRef ,ViewChild,EventEmitter,Output} from '@angular/core';
import { AuthService } from '../home/_service/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

 
    public searchTerm:string=''
    //Beginning of a new era
    productName:string=''
    getData({productName}){
      alert(productName)
    }

  @ViewChild('movableDiv', { static: true }) movableDiv: ElementRef;
  @ViewChild('movableDiv2', { static: true }) movableDiv2: ElementRef;

   //Menu Button Functionality--
   


  constructor(private authService: AuthService,private renderer: Renderer2, private el: ElementRef) {


    
    
  }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.authService.search.next(this.searchTerm)
    this.authService.cartSubject.subscribe((data) => {
      this.authService = data;
    });
   }

  cartItem: number = 0;
  cartItemFunc() {
    let cartDataNull = localStorage.getItem('localCart');
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      /*for (let prodId in containProductArray) {
        this.cartItem += containProductArray[prodId].qnt;
      }*/
      this.cartItem = cartCount.length;
    }
  }

  
  myFunction() {
    // Your custom logic goes here
    console.log("clicked")
    const divToMove = this.movableDiv.nativeElement;
  

    // Check if the div is already at -300px
    if (divToMove.style.left === '-300px') {
      // Move the div to 0px
      this.renderer.setStyle(divToMove, 'right', '00px');


    } else {
      // Move the div to -300px
      this.renderer.setStyle(divToMove, 'left', '-300px');
      this.renderer.setStyle(divToMove, 'display', 'block');
    }
  }

 
  
  myFunction2() {
    // Your custom logic goes here
    console.log("clicked")
    const divToMove = this.movableDiv.nativeElement;

    // Check if the div is already at -300px
    if (divToMove.style.left === '0px') {
      // Move the div to 0px
      this.renderer.setStyle(divToMove, 'right', '-300px');
    } 
    else {
      // Move the div to -300px
      this.renderer.setStyle(divToMove, 'left', '0px');
      this.renderer.setStyle(divToMove, 'display', 'none');
    }
  }




  
}



