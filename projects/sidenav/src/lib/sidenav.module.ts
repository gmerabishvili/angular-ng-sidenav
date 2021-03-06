import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav.component';
import {NgSidenavComponent} from './components/ng-sidenav/ng-sidenav.component';
import {CommonModule} from '@angular/common';
import {NgSidenavContentComponent} from './components/ng-sidenav-content/ng-sidenav-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HiddenOnCollapsedDirective} from './hidden-on-collapsed.directive';

@NgModule({
  declarations: [SidenavComponent, NgSidenavComponent, NgSidenavContentComponent, HiddenOnCollapsedDirective],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [SidenavComponent, NgSidenavComponent, NgSidenavContentComponent, HiddenOnCollapsedDirective]
})
export class SidenavModule {
}
