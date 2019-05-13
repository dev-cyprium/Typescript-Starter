import { createComponent, VNode, creator } from './components/component';
import { isString } from './utils/helpers';
import { Heading } from './components/heading';

class Appliaction {
  constructor(private opts: {render: (h: creator) => VNode}) {}

  attach(id: string) {
    const vDom = this.opts.render(createComponent);
    const $dom = this.render(vDom);

    const node = document.getElementById(id);
    if (node) {
      node.replaceWith($dom);
    }
  }

  render(vRoot: VNode | string) {
    if (isString(vRoot)) {
      return document.createTextNode(vRoot);
    }

    const $el = document.createElement(vRoot.tagName);

    for (const child of vRoot.children) {
      const node = this.render(child);
      $el.appendChild(node);
    }

    return $el;
  }
}

const app = new Appliaction({
  render: h => (
    h('div', {}, [
      h('h1', {}, ['Hello, world']),
      h('h2', {}, ['Also, hello!']),
      h(Heading, {}, []),
    ])
  ),
});
app.attach('app');
