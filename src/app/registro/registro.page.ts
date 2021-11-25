import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioI } from '../interface/usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  data:any="";
  email: string = "";
  password: string = "";
  formRegistro:FormGroup;

  constructor(private api:ApiLoginService) { 
    this.formRegistro = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]),
      password: new FormControl ('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    })

  }

  ngOnInit() {
  }

  onLogin(form:UsuarioI){
    this.api.crearUsuario(this.formRegistro.value).subscribe((data)=>{
      this.data = JSON.stringify(data);
      console.log(data);
    })
  }
}
