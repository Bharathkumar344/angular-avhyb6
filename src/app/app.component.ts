import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'My Angular App';
  
  // Defined cars array  
  cars = ['Tesla', 'Toyota', 'BMW', 'Honda', 'Ford', 'Hyundai', 'Nissan', 'Porsche'];
}
