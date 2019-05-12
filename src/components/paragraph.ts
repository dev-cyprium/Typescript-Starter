import { Component, DOMString } from './component';

export class Paragraph implements Component {
  constructor(private text: string) {}

  render(): DOMString {
    return `<p>${this.text}</p>`;
  }
}
