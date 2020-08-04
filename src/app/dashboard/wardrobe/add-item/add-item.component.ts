import { getItemsSelectOptions } from './../items';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../item.service';
import {Item} from '../item.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Travel} from '../../travels/travel.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  readonly successAddNotificationMessage = 'Item has been added!';
  readonly successDeleteNotificationMessage = 'Item has been deleted!';
  itemForm = new FormGroup( {
    name:  new FormControl('', Validators.required),
    amount: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ])
  });

  items: Item[] = [];
  selectedOptions = getItemsSelectOptions();
  showSpinner: boolean = true;

  readonly counterValue = 1;
  readonly counterStep = 1;
  readonly counterMin = 1;
  readonly counterMax = Infinity;
  readonly counterWrap = false;

  constructor(private itemService: ItemService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(ownedItems => {
      this.items = ownedItems;
      this.showSpinner = false;
    });
  }

upsert() {
    const name = this.itemForm.get('name').value;
    const amount = this.itemForm.get('amount').value;
    const id = '';
    const item = new Item(name, amount, id);
    this.itemService.upsert(item).then(() => {
      this.ShowSnackBar(this.successAddNotificationMessage);
    });
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item).then(() => {
      this.ShowSnackBar(this.successDeleteNotificationMessage);
    });
  }

  private ShowSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
