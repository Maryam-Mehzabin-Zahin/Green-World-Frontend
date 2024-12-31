import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreenPostListComponent } from './green-post-list/green-post-list.component';

@Component({
  selector: 'app-root',
  imports: [GreenPostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Green World Inventory';
}
