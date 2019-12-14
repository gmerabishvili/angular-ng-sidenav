# Angular Sidenav
* See [Demo](https://gmerabishvili.github.io/angular-ng-sidenav/) 


Table of contents
=================

  * [Features](#features)
  * [Getting started](#getting-started)
  * [Usage](#usage-sample)
  * [API](#api)

## Features
- [x] Simple sidenav with hidden and collapsed view.
- [x] Variable properties and event bindings.
- [x] Custom template.

## Getting started
### Step 1: Install `angular-ng-sidenav`:

#### NPM
```shell
npm i angular-ng-sidenav
```
### Step 2: Import the SidenavLibModule:
```js
import {SidenavModule} from 'angular-ng-sidenav';

@NgModule({
  declarations: [AppComponent],
  imports: [SidenavModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
### Usage sample

```html
<ng-sidenav-container>
  <ng-sidenav
    [expanded]="isExpanded"
    [drawerState]="state"
    [drawerWidth]="'250px'"
    [drawerWidthCollapsed]="'80px'"
    [color]="'#202c2b'">
    Sidenav content
  </ng-sidenav>
  <ng-sidenav-content>
    Main content
  </ng-sidenav-content>
</ng-sidenav-container>

```
```javascript

class TestComponent {
  isExpanded = true;
  state = 'collapsed';

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
```

## API
### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| expanded | `boolean`  | `null` | yes | Whether drawer is open or close depend on drawer state. |
| drawerState | `string` |  `null` | yes | Drawer state (expanded, collapsed, hidden). |
| color  | `string` | `#19222a` | no |  Sidenav color  |
| drawerWidth | `string` | `250px` | no | Drawer width by default. |
| drawerWidthCollapsed  | `string` | `80px` | no |  drawer default width on collapsed view by default.  |
| *hiddenOnCollapsed  | `boolean` | `false` | no |  show/hide some elements inside sidenav when drawer state changes from or to collapsed.  |

### Author
* [Giorgi Merabishvili](https://www.linkedin.com/in/giorgi-merabishvili-3719a2121/)


## License

MIT


