import { Component, OnInit } from '@angular/core';
import { costumerI } from '../../models/costumer.interface';
import { CostumerService } from '../../services/costumer.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.page.html',
  styleUrls: ['./costumer-details.page.scss'],
})
export class CostumerDetailsPage implements OnInit {

  arraycostumer: costumerI = {
    name: '',
    email: '',
    phone: '',
    movingFrom: '',
    movingDate: '',
    movingTo: '',
    FADD: '',
    comments: ''
  }

  costumerId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private costservice: CostumerService, private loadingControl : LoadingController) { 

  }

  ngOnInit() {
    this.costumerId = this.route.snapshot.params['id'];
    if(this.arraycostumer){
      this.loadCostumer();
    }
  }

  async loadCostumer(){
    const loading = await this.loadingControl.create({
      message:'Loading.....'
    });
    await loading.present();
    this.costservice.getCostumer(this.costumerId)
  }

}
