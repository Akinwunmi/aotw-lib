import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';

import style from './stepper.scss?inline';
import { AotwStep } from './step';

const AOTW_STEPPER = 'aotw-stepper';

@customElement(AOTW_STEPPER)
export class AotwStepper extends LitElement {
  @query('.progress')
  private progress!: HTMLDivElement;

  @queryAssignedElements()
  private steps!: AotwStep[];
  
  public static override styles = [unsafeCSS(style)];

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange=${this.onSlotChange.bind(this)}></slot>
      <div class="progress-bar"></div>
      <div class="progress"></div>
    `;
  }

  private onSlotChange(): void {
    const activeStep = this.steps.findIndex(step => step.hasAttribute('active'));
    this.steps.slice(0, activeStep).forEach(step => step.toggleAttribute('completed', true));
    this.progress.style.height = `calc(${100 / (this.steps.length - 1) * activeStep}% - 0.5rem)`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_STEPPER: AotwStepper
  }
}
