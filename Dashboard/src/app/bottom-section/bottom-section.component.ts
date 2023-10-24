import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss']
})
export class BottomSectionComponent {
  items = [
    { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    { data1: 'Data 4', data2: 'Data 5', data3: 'Data 6', selected: false },
    // Add more data as needed
  ];

  selectAll = false;

  toggleSelectAll() {
    this.items.forEach(item => {
      item.selected = this.selectAll;
    });
  }
}
