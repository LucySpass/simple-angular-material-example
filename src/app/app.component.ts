import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toolbarText: string = 'AS-15-04 IS THE BEST!';
  counter: number = 0;
  something: string = 'Что-нибудь';

  onBtnClick() {
    this.counter++;
  }
}
