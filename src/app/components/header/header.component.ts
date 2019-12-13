import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded = true;

  @Output() sidenavToggled = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    this.sidenavToggled.emit(this.isExpanded);
  }
}
