import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit{

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() { }

  ngOnInit(): void {  
  }

  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth <= 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
}
