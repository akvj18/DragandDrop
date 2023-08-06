import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropanddrag';
  optionSelected: number = 1;

  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  review = ["Take bath", "Wash car"];

  onChange($event:any) {
    this.optionSelected = $event.value;
  }

  allowDrop = (drag: any, drop: any) => {
    debugger;
    if (drop.id === "includeList" && this.optionSelected === 1) {
      return true;
    } else if (drop.id === "excludeList" && this.optionSelected === 2) {
      return true;
    } else {
      return false;
    }
  };
  

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);


    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
