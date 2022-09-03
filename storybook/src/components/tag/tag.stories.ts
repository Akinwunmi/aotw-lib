import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import './tag.scss';
import { tagArgs, TagControls, TagTemplate } from './tag.model';

export default {
  title: 'Components/Tag',
  argTypes: TagControls
} as Meta;

export const Default = TagTemplate.bind({});
Default.args = tagArgs;

export const WithIcon = TagTemplate.bind({});
WithIcon.args = {
  ...tagArgs,
  slot: html`<aotw-icon name="shine" prefix></aotw-icon>`
};

export const WithTextAndIcon = TagTemplate.bind({});
WithTextAndIcon.args = {
  ...tagArgs,
  slot: html`
    <aotw-icon name="shine" prefix></aotw-icon>
    Tag
  `
};

export const Deletable = TagTemplate.bind({});
Deletable.args = {
  ...tagArgs,
  slot: html`
    Tag
    <aotw-icon name="close" suffix></aotw-icon>
  `
};

export const DeletableWithIcon = TagTemplate.bind({});
DeletableWithIcon.args = {
  ...tagArgs,
  slot: html`
    <aotw-icon name="shine" prefix></aotw-icon>
    <aotw-icon name="close" suffix></aotw-icon>
  `
};

export const CustomColors = TagTemplate.bind({});
CustomColors.args = {
  ...tagArgs,
  customClass: 'custom-colors',
  slot: html`
    <aotw-icon name="shine" prefix></aotw-icon>
    Tag
    <aotw-icon name="close" suffix></aotw-icon>
  `
};
