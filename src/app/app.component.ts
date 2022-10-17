import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handelIncress = () => {

    if(this.count === 10){
      this.count = -1
    }
    
    this.count = this.count + 1;
  }

  handelDecress = () => {

    if(this.count < 1){
      this.count = 1;
    }

    this.count = this.count - 1;
  }

  handelReset = () => {
    this.count = 0;
  }
}
