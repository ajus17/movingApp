import { Component, OnInit} from '@angular/core';
import { costumerI } from '../models/costumer.interface';
import { CostumerService } from '../services/costumer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  costumers: costumerI[];
  constructor( private costumerServ : CostumerService) {}

  ngOnInit(){
    this.costumerServ.getCostumers().subscribe( res => {
      this.costumers = res;
    });
  }

}
