import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userLocalStorage(name: string){
    return localStorage.setItem('usuario', name);
  }
}
