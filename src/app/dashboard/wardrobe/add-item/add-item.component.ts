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
  readonly notification = 'Item has been added!';
  itemForm = new FormGroup( {
    name:  new FormControl('', Validators.required),
    amount: new FormControl()
  });

  itemsGroups = itemsGroups;
  items: Item[] = [];

  readonly counterValue = 1;
  readonly counterStep = 1;
  readonly counterMin = 1;
  readonly counterMax = Infinity;
  readonly counterWrap = false;

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

  addItem() {
    const name = this.itemForm.get('name').value;
    const amount = this.itemForm.get('amount').value;
    const item = new Item(name, amount);
    this.itemService.addItem(item).then(() => {
      this.addTravelSnackBar(this.notification);
    });
  }

  private addTravelSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
