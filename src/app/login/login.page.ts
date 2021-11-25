import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { UsuarioI } from '../interface/usuario.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data:any="";
  email: string = "";
  password: string = "";

  constructor(private api:ApiLoginService) { }

  crearUsuario(){
    var dataToSend = {email: "asdasdasdj",password: "981681"};
    this.api.crearUsuario(dataToSend).subscribe((data)=>{
      this.data = JSON.stringify(data);
    })
  }

  ngOnInit() {
  }
}
