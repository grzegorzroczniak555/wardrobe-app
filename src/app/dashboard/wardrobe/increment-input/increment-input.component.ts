import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-increment-input',
  templateUrl: './increment-input.component.html',
  styleUrls: ['./increment-input.component.scss']
})
export class IncrementInputComponent {

  @Input()
  itemFormAmount = new FormGroup({
    amount: new FormControl()
  });

  counterValue = 1;
  counterStep = 1;
  counterMin = 1;
  counterMax = Infinity;
  counterWrap = false;
  color = 'default';

  @Input('value')
  set inputValue(counterValue: number) {
    this.counterValue = this.parseNumber(counterValue);
  }

  @Input()
  set step(counterStep: number) {
    this.counterStep = this.parseNumber(counterStep);
  }

  @Input()
  set min(counterMin: number) {
    this.counterMin = this.parseNumber(counterMin);
  }

  @Input()
  set max(counterMax: number) {
    this.counterMax = this.parseNumber(counterMax);
  }

  @Input()
  set wrap(counterWrap: boolean) {
    this.counterWrap = this.parseBoolean(counterWrap);
  }

  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }

  incrementValue(step: number = 1): void {

    let inputValue = this.counterValue + step;

    if (this.counterWrap) {
      inputValue = this.wrappedValue(inputValue);
    }

    this.counterValue = inputValue;
  }

  private wrappedValue(inputValue): number {
    if (inputValue > this.counterMax) {
      return this.counterMin + inputValue - this.counterMax;
    }

    if (inputValue < this.counterMin) {

      if (this.counterMax === Infinity) {
        return 0;
      }

      return this.counterMax + inputValue;
    }

    return inputValue;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return !this.counterWrap && inputValue <= this.counterMin;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return !this.counterWrap && inputValue >= this.counterMax;
  }

}
