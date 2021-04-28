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
  @Input() showTooltip = true;
  @Input() tooltipText = 'Добавь сюда своё сообщение через атрибут tooltipText';

  private _overlayRef: OverlayRef;

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    if (!this.showTooltip) {
      return;
    }

    const positionStrategy = this._overlayPositionBuilder
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
        },
      ]);

    this._overlayRef = this._overlay.create({positionStrategy});
  }

  @HostListener('mouseenter')
  show() {
    if (this._overlayRef && !this._overlayRef.hasAttached()) {
      const tooltipRef: ComponentRef<CustomTooltipComponent> = this._overlayRef.attach(
        new ComponentPortal(CustomTooltipComponent),
      );
      if (this.tooltipText) {
        tooltipRef.instance.text = this.tooltipText;
      }
    }
  }

  @HostListener('mouseleave')
  @HostListener('wheel')
  hide() {
    this.closeToolTip();
  }

  private closeToolTip() {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
  }
}
