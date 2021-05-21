import { Component } from '@angular/core';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do-uikit';
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  matFormFieldDefaultOptions: MatFormFieldDefaultOptions = { appearance: 'outline'};

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(public dialog: MatDialog) {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  openDialog() {
      // const dialogConfig = new MatDialogConfig();
      // dialogConfig.autoFocus = true;

      this.dialog.open(CustomDialogComponent, {
        height: '400px',
        width: '600px',
      });
  }
}
