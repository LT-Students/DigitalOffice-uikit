import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomTooltipComponent } from '../../components/custom-tooltip/custom-tooltip/custom-tooltip.component';

@Directive({
  selector: '[appCustomTooltip]',
})
export class CustomTooltipDirective implements OnInit {
  @Input() appCustomTooltip: string;

  private _overlayRef: OverlayRef;

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    const positionStrategy = this._overlayPositionBuilder
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom',
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        }
      ]);

    this._overlayRef = this._overlay.create({positionStrategy});
  }

  @HostListener('mouseenter')
  show() {
    if (this._overlayRef && !this._overlayRef.hasAttached() && this.appCustomTooltip) {
      const tooltipRef: ComponentRef<CustomTooltipComponent> = this._overlayRef.attach(
        new ComponentPortal(CustomTooltipComponent),
      );
      tooltipRef.instance.text = this.appCustomTooltip;
      console.log(this._overlayPositionBuilder);
    }
  }

  // @HostListener('mouseleave')
  // hide() {
  //   this.closeToolTip();
  // }

  private closeToolTip() {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
  }
}
