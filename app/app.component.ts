import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  items=[];
  newTask:''='';

  addToList(){
    if(this.newTask==''){}
    else{
      this.items.push(this.newTask);
      this.newTask='';
    }
  }

  deleteTask(index: number){
    this.items.splice(index, 1);
  }
}
