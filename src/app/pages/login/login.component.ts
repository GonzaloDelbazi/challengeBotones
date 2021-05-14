import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  guardarUsuario(){
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const contraseña = (document.getElementById('password') as HTMLInputElement).value;
    this._userService.userLocalStorage(nombre);
    this.router.navigateByUrl('/home');

  }

}
