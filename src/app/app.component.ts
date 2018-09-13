import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first project';
  name = 'Tebogo';
  x=10;
  y=25;
  sum=this.x+this.y;
}
