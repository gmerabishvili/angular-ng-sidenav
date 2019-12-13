import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-sidenav-container',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: flex;
      align-items: stretch;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `],
})
export class SidenavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
