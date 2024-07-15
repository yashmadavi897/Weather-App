import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faWind} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css'],
  schemas: [NO_ERRORS_SCHEMA]  // Add this line to allow any property
})
export class RightContainerComponent {

  faWind= faWind;

  // variables to control tabs
  today: boolean = false;
  week: boolean = true;

  // variables to control value of temp
  celsius: boolean = true;
  fahrenheit: boolean = false;

  // functions to control tabs
  onTodayClick() {
    this.today = true;
    this.week = false;
  }

  onWeekClick() {
    this.week = true;
    this.today = false;
  }

  // functions to control temp value
  onCelsiusClick() {
    this.celsius = true;
    this.fahrenheit = false;
  }

  onFahrenheitClick() {
    this.fahrenheit = true;
    this.celsius = false;
  }
}
