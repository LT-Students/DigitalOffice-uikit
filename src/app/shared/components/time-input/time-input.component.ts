import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

interface Time {
  hours: number;
  minutes: number;
}

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: TimeInputComponent}]
})
export class TimeInputComponent implements OnInit, MatFormFieldControl<Time> {

  constructor(fb: FormBuilder) {
    this.parts = fb.group({
      hours: '',
      minutes: '',
    });
  }

  get empty() {
    const {hours, minutes} = this.parts.value;
    return !hours && !minutes;
  }

  @Input()
  get value(): Time {
    return this.parts.value;
  }

  set value(time: Time) {
    this.parts.setValue({ ...time });
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return this.parts.invalid && this.parts.dirty;
  }

  static nextId = 0;

  shouldLabelFloat = true;
  public parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  controlType = 'time-input';
  disabled = false;
  ngControl: NgControl | null;

  placeholder: string;
  required: boolean;

  @HostBinding()
  id = `time-input-${TimeInputComponent.nextId++}`;

  ngOnInit() {
  }

  onContainerClick(event: MouseEvent): void {
  }

  setDescribedByIds(ids: string[]): void {
  }
}
