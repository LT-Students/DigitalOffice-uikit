import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do-uikit';

  formFieldAppearance = 'outline';

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
