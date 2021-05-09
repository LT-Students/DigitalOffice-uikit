import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material';
import { MatButtonLoadingDirective } from './directives/mat-button-loading.directive';
import { TimeInputComponent } from './components/time-input/time-input.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatChipsModule,
        MatCardModule,
        MatDialogModule,
        MatTabsModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatButtonLoadingDirective,
        TimeInputComponent
    ],
  providers: [{ provide: MatDialogRef, useValue: {} }],
  declarations: [ MatButtonLoadingDirective, TimeInputComponent ],
  entryComponents: [ MatProgressSpinner ],
})
export class MaterialModule {}
