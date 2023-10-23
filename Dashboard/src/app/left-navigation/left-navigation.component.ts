import { Component, ViewChild } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TopSectionComponent } from '../top-section/top-section.component';


@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
})
export class LeftNavigationComponent {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  
    
   
  }


}
