import { Component, DOMString } from './component';

export enum HType {
  h1 = 1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

export class Heading implements Component {
  constructor(private hType: HType, private text: string) {}

  render(): DOMString {
    return `<h${this.hType}>${this.text}</h${this.hType}>`;
  }
}
