import '@aotw/components/src/dialog';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface DialogArgTypes {
  content: TemplateResult | string;
  scrim: boolean;
  title: TemplateResult;
  visual?: TemplateResult;
}

export const dialogArgs: DialogArgTypes = {
  content: 'Content',
  scrim: true,
  title: html`<span slot="title">Title</span>`
};

export const DialogTemplate: Story<DialogArgTypes> = (
  { content, scrim, title, visual }: DialogArgTypes
) => {
  function closeDialog(e) {
    document.querySelector('#root-inner')?.removeChild(e.detail);
  }

  return html`
    <aotw-dialog
      @closeDialog=${closeDialog}
      ?scrim=${scrim}
    >${title}${visual}${content}</aotw-dialog>
  `;
};