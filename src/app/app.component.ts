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
  taskList:string[]=[]
  task_Text:string=''
  taskComplete:string[]=[]
  taskText(event:any){
     this.task_Text=event.target.value
     
  }
  AddTask(){
    if(this.task_Text==""){
      window.alert("Your input Task is empty.")
    }
    else{
      this.taskList.push(this.task_Text)
      this.task_Text=""
      let inputClear:any = document.getElementById("in");
       inputClear.value="";
    }
    
  }
  Delete(index:any){
    const audio = new Audio("assets/Delete.m4a")
    audio.play();
    this.taskList.splice(index,1)
  }
  Complete(index:any){
    const audio = new Audio("assets/Completed.m4a")
    audio.play();
    setTimeout(()=>{
      this.taskComplete.push(this.taskList[index])
      this.taskList.splice(index,1);
    },500)
    
  }
}
