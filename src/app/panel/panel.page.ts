import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {


  constructor(private servicio:ApiLoginService) {
   }

  ngOnInit() {
  }


}
