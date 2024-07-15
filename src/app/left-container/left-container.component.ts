import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faCloud} from '@fortawesome/free-solid-svg-icons';
import { faCloudRain} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent {
  faLocation = faLocation;
faMagnifyingGlass=faMagnifyingGlass;
faCloud = faCloud;
faCloudRain =faCloudRain;
}
