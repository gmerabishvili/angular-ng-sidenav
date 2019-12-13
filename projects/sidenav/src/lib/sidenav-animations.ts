import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/** Animation that slides a drawer in and out. */
export const sidenavAnimations: {
  readonly serDrawerState: AnimationTriggerMetadata;
} = {
  serDrawerState: trigger('drawerState', [
    state('expanded', style({width: '{{ drawerWidth }}'}), {params: {drawerWidth: '250px'}}),
    state('collapsed', style({width: '{{ drawerWidthCollapsed }}'}), {params: {drawerWidthCollapsed: '80px'}}),
    state('hidden', style({width: '0'})),
    transition('collapsed => expanded', animate('200ms ease-in')),
    transition('expanded => collapsed', animate('200ms ease-out')),
    transition('hidden => expanded', animate('200ms ease-in')),
    transition('expanded => hidden', animate('200ms ease-out'))
  ]),
};
