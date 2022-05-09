import { TemplateResult } from 'lit';

export interface Column {
  key: string;
  name: string;
  abbreviation?: string;
}

export interface Data {
  [key: string]: string | string[] | boolean | TemplateResult;
}