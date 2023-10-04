import { Component, OnInit, Renderer2,ElementRef ,ViewChild,EventEmitter,Output} from '@angular/core';
import { AuthService } from '../home/_service/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  enteredSearchValue:string='';
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
    
  }

    //Beginning of a new era
    productName:string=''
    getData({productName}){
      alert(productName)
    }

  @ViewChild('movableDiv', { static: true }) movableDiv: ElementRef;
  @ViewChild('movableDiv2', { static: true }) movableDiv2: ElementRef;

   //Menu Button Functionality--
   


  constructor(private auth: AuthService,private renderer: Renderer2, private el: ElementRef) {
    this.auth.cartSubject.subscribe((data) => {
      this.cartItem = data;
    });
    
    
  }

  ngOnInit(): void {
    this.cartItemFunc();
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
    }
  }

  myFunction3() {
    // Your custom logic goes here
    console.log("clicked");
    const divToMove2 = this.movableDiv2.nativeElement;
  
    // Check if the div is already at 0px
    if (divToMove2.style.left === '0px') {
      // Move the div to -300px
      this.renderer.setStyle(divToMove2, 'left', '-300px');
    } else {
      // Move the div to 0px
      this.renderer.setStyle(divToMove2, 'left', '0px');
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
    }
  }

  myFunction4() {
    // Your custom logic goes here
    console.log("clicked")
    const divToMove2 = this.movableDiv2.nativeElement;
  
  
    // Check if the div is already at -300px
    if (divToMove2.style.left === '-400px') {
      // Move the div to 0px
      this.renderer.setStyle(divToMove2, 'right', '00px');
    } else {
      // Move the div to -300px
      this.renderer.setStyle(divToMove2, 'left', '-400px');
    }
  }


  
}



