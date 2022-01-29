import { LitElement, svg, css, unsafeCSS, html } from 'lit-element';
import { property, customElement } from 'lit/decorators.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":host {\n  display: block;\n  width: 100%;\n  color: inherit;\n}";
styleInject(css_248z);

let IconLogoComponent = class IconLogoComponent extends LitElement {
    render() {
        return svg `
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Archive of the World Logo</title>
        <circle cx="9" cy="9" r="8" stroke=${this.color} stroke-width="2"/>
        <rect x="1" y="8.25" width="16" height="1.5" fill=${this.color} />
        <path
          d="M7.8708 1.67173C8.07652 1.44336 8.24642 1.25475 8.39999 1.04999L9.59999 1.94999C9.40453 2.21061 9.16312 2.47883 8.9341 2.73328C8.84425 2.83311 8.75631 2.93082 8.6738 3.02512C8.36134 3.38221 8.0527 3.76779 7.77463 4.24978C7.22656 5.19978 6.74999 6.60723 6.74999 8.99999C6.74999 11.5126 6.38685 13.0246 5.61997 13.8767C4.83119 14.7531 3.77322 14.7513 3.07498 14.7501C3.0495 14.75 3.02449 14.75 3 14.75V13.25C3.80436 13.25 4.1976 13.2149 4.50502 12.8733C4.86314 12.4754 5.24999 11.4874 5.24999 8.99999C5.24999 6.39274 5.77343 4.71686 6.47535 3.5002C6.82228 2.89885 7.20114 2.43027 7.54494 2.03736C7.66341 1.90196 7.77129 1.7822 7.8708 1.67173Z"
          clip-rule="evenodd"
          fill=${this.color}
          fill-rule="evenodd"
        />
        <path
          d="M13.495 12.8733C13.8024 13.2149 14.1956 13.25 15 13.25L15 14.75C14.9755 14.75 14.9505 14.75 14.925 14.7501C14.2268 14.7513 13.1688 14.7531 12.38 13.8767C11.6131 13.0246 11.25 11.5126 11.25 9C11.25 6.60725 10.7734 5.19979 10.2254 4.24979C9.9473 3.76781 9.63865 3.38222 9.3262 3.02513C9.24368 2.93083 9.15574 2.83312 9.06589 2.73329C8.83688 2.47884 8.59547 2.21063 8.4 1.95L9.6 1.05C9.75357 1.25476 9.92347 1.44337 10.1292 1.67175C10.2287 1.78221 10.3366 1.90198 10.4551 2.03737C10.7989 2.43028 11.1777 2.89886 11.5246 3.50021C12.2266 4.71688 12.75 6.39276 12.75 9C12.75 11.4874 13.1369 12.4754 13.495 12.8733Z"
          fill=${this.color}
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    `;
    }
};
IconLogoComponent.styles = [css_248z];
__decorate([
    property()
], IconLogoComponent.prototype, "color", void 0);
IconLogoComponent = __decorate([
    customElement('icon-logo')
], IconLogoComponent);

let IconComponent = class IconComponent extends LitElement {
    render() {
        var _a;
        this.color = (_a = this.color) !== null && _a !== void 0 ? _a : 'currentColor';
        this.style.setProperty('width', this.width);
        switch (this.name) {
            case 'logo':
                return html `<icon-logo color=${this.color}></icon-logo>`;
            default:
                return html `Icon not found`;
        }
    }
};
IconComponent.styles = [css `${unsafeCSS(css_248z)}`];
__decorate([
    property()
], IconComponent.prototype, "color", void 0);
__decorate([
    property()
], IconComponent.prototype, "name", void 0);
__decorate([
    property()
], IconComponent.prototype, "width", void 0);
IconComponent = __decorate([
    customElement('aotw-icon')
], IconComponent);

export { IconComponent };
