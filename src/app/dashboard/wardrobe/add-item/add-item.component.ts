import {Component, OnInit} from '@angular/core';
import {itemsGroups} from '../items';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../item.service';
import {Item} from '../item.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  readonly message = 'Item has been added!';
  itemForm = new FormGroup( {
    name:  new FormControl('', Validators.required),
    amount: new FormControl()
  });

  itemsGroups = itemsGroups;
  items: Item[] = [];

  counterValue = 1;
  counterStep = 1;
  counterMin = 1;
  counterMax = Infinity;
  counterWrap = false;

  constructor(public itemService: ItemService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  updateItem() {
    const name = this.itemForm.get('name').value;
    const amount = this.itemForm.get('amount').value;
    const item = new Item(name, amount);
    this.itemService.updateItem(item).then(() => {
      this.addTravelSnackBar(this.message);
    });
  }

  addTravelSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
