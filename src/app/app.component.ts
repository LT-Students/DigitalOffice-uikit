import { Component } from '@angular/core';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do-uikit';

  email = new FormControl('', [Validators.required, Validators.email]);

  matFormFieldDefaultOptions: MatFormFieldDefaultOptions = { appearance: 'outline'};

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
