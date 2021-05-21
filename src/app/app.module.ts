import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@NgModule({
  declarations: [AppComponent, CustomDialogComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		ReactiveFormsModule
	],
  providers: [CustomDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
