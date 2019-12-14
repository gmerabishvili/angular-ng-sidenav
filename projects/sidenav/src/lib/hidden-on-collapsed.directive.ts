import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[hiddenOnCollapsed]'
})
export class HiddenOnCollapsedDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input() set hiddenOnCollapsed(isShown: boolean) {
    if (isShown) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Else remove template from DOM
      this.viewContainer.clear();
    }
  }
}
