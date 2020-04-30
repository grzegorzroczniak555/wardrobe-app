import {Component, OnInit} from '@angular/core';
import {itemsGroups} from '../items';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../item.service';
import {Item} from '../item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
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

  constructor(public itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  updateItem(item) {
    this.itemService.updateItem(item);
  }

  addItem() {
    const name = this.itemForm.get('name').value;
    const amount = this.itemForm.get('amount').value;
    const item = new Item(name, amount);
    this.updateItem(item);
    // this.itemService.addItem(item);
  }

}
