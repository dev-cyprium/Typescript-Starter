import { Component, DOMString } from './component';

export class VNode implements Component {
  private components: Component[] = [];

  render(): DOMString {
    let html: DOMString = '';
    for (const component of this.components) {
      html += component.render();
    }
    return html;
  }

  add(component: Component) {
    this.components.push(component);
  }
}
