import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {sidenavAnimations} from '../../sidenav-animations';

@Component({
  selector: 'ng-sidenav',
  templateUrl: './ng-sidenav.component.html',
  styleUrls: ['./ng-sidenav.component.scss'],
  animations: [sidenavAnimations.serDrawerState]
})
export class NgSidenavComponent implements OnInit, OnChanges {
  // TODO: Add mode: 'over' | 'push' | 'side'
  private _drawerState;

  @Input() expanded = true; // Whether drawer is open or close depend on drawer state
  @Input() drawerState = 'expanded'; // Drawer state (expanded, collapsed, hidden)
  @Input() color = '#19222a';
  @Input() drawerWidth = '250px';
  @Input() drawerWidthCollapsed = '80px';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Drawer state change
    if (changes && changes.drawerState) {
      this._drawerState = changes.drawerState.currentValue;
    }
    // drawer open/close change
    if (changes && changes.expanded) {
      this.expanded = changes.expanded.currentValue;
      this.drawerState = this.expanded ? 'expanded' : this._drawerState;
    }
  }
}
