import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  taskText:string=''
  completedTask:string[]=[]
  tasks:string[]=[]
  AddTask(){
    let i:any = document.getElementById("in")
    if(this.taskText==''){
      window.alert("Your input task is empty..");
    }
    else{
      this.tasks.push(this.taskText);
      this.taskText=''
    }
    
      i.value=null
  }
  AddText(event:any){
   this.taskText= (event.target.value)
  }
  delete(index:any){
    const audio= new Audio("assets/Delete.m4a")
    audio.play();
    this.tasks.splice(index,1)
  }
  CompletedTask(index:any){
    const audio= new Audio("assets/Completed.m4a")
    audio.play();
    this.completedTask.push(this.tasks[index])
    this.tasks.splice(index,1)
  }
}
