import { Component, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SelectListItemModel } from './select-list-item.model';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectListComponent),
      multi: true
    }
  ]
})
export class SelectListComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() items: SelectListItemModel[];
  @Input() disabled: boolean;
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  id: string;

  private innerValue: number;
  public selectedOption: number;

  private propagateChange = (_: any) => { };

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
    this.id = this.generateId();
  }

  generateId(): string {
    return Math.random().toString().substring(2);
  }

  get value(): number {
    return this.innerValue;
  }

  set value(val: number) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.propagateChange(val);
    }
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  onSelectionChanged(item: any) {
    this.selectionChanged.emit(item);
  }
}
