import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public search = new BehaviorSubject<string>("")

  constructor() { }

  cartSubject =new Subject<any>();    
}
