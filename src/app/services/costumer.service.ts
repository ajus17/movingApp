import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { costumerI } from '../models/costumer.interface';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  private costumerCollection: AngularFirestoreCollection <costumerI>;
  private costumers : Observable<costumerI[]>;

  constructor(db: AngularFirestore) { 
    this.costumerCollection = db.collection<costumerI>('costumers');
    this.costumers = this.costumerCollection.snapshotChanges().pipe( map(
      Action => {
        return Action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      }
    ));
  }

  getCostumers(){
    return this.costumers;
  }

  getCostumer(id:string){
    this.costumerCollection.doc<costumerI>(id).valueChanges();
  }
  updateCostumer(costumer: costumerI, id: string){
    this.costumerCollection.doc(id).update(costumer);
  }
  addCostumer(costumer:costumerI){
    this.costumerCollection.add(costumer);
  }
  removeCostumer(id:string){
    return this.costumerCollection.doc(id).delete();
  }
}
