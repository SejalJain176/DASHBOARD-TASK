import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss']
})


export class BottomSectionComponent {
  items :any[]= [
    
    // Add more data as needed
  ];

  selectAll = false;
  data: any[]=[];
  columnsData:any[]=[];
  itemsToDisplay: any;
constructor(private http: HttpClient){

}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
previousPage() {
  this.paginator.previousPage();
}

nextPage() {
  this.paginator.nextPage();
}
ngOnInit(){

  this.http.get<any>('https://1.api.fy23ey04.careers.ifelsecloud.com/').subscribe(
    (response) => {
      this.data = response;
      this.items=response.grid_data;
      this.columnsData=response.grid_columns;

      this.items.forEach(element => {
        element.selected=false;
        
      });

      // this.setUpPagination();
      console.log('API Response:', response);
    },
    (error) => {
      console.error('API Error:', error);
    }
  );


}
  toggleSelectAll() {
    this.items.forEach(item => {
     item.selected = this.selectAll;
    });
  }
  editItem(item:any){
     if(item.selected)
    alert(item.name.first_name)
  }
 
  pageSize: number = 10; 

  // onPageChange(event: any) {
   
  //   const startIndex = event.pageIndex * event.pageSize;
    
  //   // Update the data to display only items for the current page
  //   this.itemsToDisplay = this.items.slice(startIndex, startIndex + event.pageSize);
  // }


  deleteItem(item: any) {
   if(item.selected){
    const index = this.items.indexOf(item);

    
    if (index !== -1) {
      this.items.splice(index, 1);
     
    }

  }
  
  }

  // setUpPagination(){
  //   this.pageSize = 10;
  //   this.onPageChange({ previousPageIndex: 0,pageIndex:0, pageSize: this.pageSize ,length: this.items.length});
  // }
}
