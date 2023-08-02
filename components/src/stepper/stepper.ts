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

  public override disconnectedCallback(): void {
    this.steps.forEach(step => {
      step.removeEventListener('click', this.updateProgress.bind(this));
      step.removeEventListener('updated', this.updateProgress.bind(this));
    });
  }

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange=${this.onSlotChange.bind(this)}></slot>
      <div class="progress-bar"></div>
      <div class="progress"></div>
    `;
  }

  private onSlotChange(): void {
    this.updateProgress();
    this.steps.forEach(step => {
      step.addEventListener('click', this.updateProgress.bind(this));
      step.addEventListener('updated', this.updateProgress.bind(this));
    });
  }

  private updateProgress(): void {
    const activeStep = this.steps.findIndex(step => step.hasAttribute('active'));
    this.steps.forEach((step, index) => {
      step.toggleAttribute('active', index === activeStep);
      step.toggleAttribute('completed', index < activeStep);
    });
    this.progress.style.height = `calc(${100 / (this.steps.length - 1) * activeStep}% - 0.5rem)`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_STEPPER: AotwStepper
  }
}
