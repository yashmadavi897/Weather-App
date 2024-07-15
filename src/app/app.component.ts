// src/app/app.component.ts
import { Component } from '@angular/core';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LeftContainerComponent, RightContainerComponent],
  standalone: true
})
export class AppComponent { }
