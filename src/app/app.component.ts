import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currenttext = 'heyyy';
  animals = [
    {
      name:'Bee',
      sound: 'bzzzzzzz'
    },
    {
      name:'Tiger',
      sound:'grrrrrrrr'
    },
    {
      name:'cat',
      sound: 'meowww'
    }
  ]

  handleStatusUpdate(animal:any){
    console.log(` ${animal.name} is now ${animal.status}`)
  }
}
