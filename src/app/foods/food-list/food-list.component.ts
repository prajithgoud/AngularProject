import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  @Input('the-animal')animal:any
  @Input()text=''
  @Output()statusUpdate:EventEmitter<any> = new EventEmitter()
  currentStatus: string
  food:any
  constructor() { }

  ngOnInit() {

    this.food ={
      name : 'apple',
      fat : 0.2
    }

    this.currentStatus = ANIMAL_STATUS.AWAKE

    // setInterval( () =>{
    //   this.currentStatus = this.currentStatus == ANIMAL_STATUS.ASLEEP ? ANIMAL_STATUS.AWAKE : ANIMAL_STATUS.ASLEEP;
    //   this.sendUpdates()
    // },2000)
  }

  sendUpdates(){
    this.statusUpdate.emit({
      name : this.animal.name,
      status : this.currentStatus
    })
  }

  getfat(){
    return this.food.fat ;
  }

}

export const ANIMAL_STATUS = {
  ASLEEP: "asleep",
  AWAKE : "awake"
}