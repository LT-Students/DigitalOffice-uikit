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
  OverlayRef, RepositionScrollStrategy,
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
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        }
      ]);
    const scrollStrategy = this._overlay.scrollStrategies.reposition({scrollThrottle: 10});

    this._overlayRef = this._overlay.create({positionStrategy, scrollStrategy});
  }

  @HostListener('mouseenter')
  show() {
    if (this._overlayRef && !this._overlayRef.hasAttached() && this.appCustomTooltip) {
      const tooltipRef: ComponentRef<CustomTooltipComponent> = this._overlayRef.attach(
        new ComponentPortal(CustomTooltipComponent),
      );
      tooltipRef.instance.text = this.appCustomTooltip;
    }
  }

  @HostListener('mouseleave')
  foo() {
    console.log(this._overlayRef.getConfig().positionStrategy);
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
