import { Button } from './components/button';
import { Heading, HType } from './components/heading';
import { Paragraph } from './components/paragraph';
import { VNode } from './components/vnode';

class Appliaction {
  private root: VNode;

  constructor(private id: string) {
    this.root = new VNode();

    this.root.add(new Heading(HType.h2, 'Hello, world!'));
    this.root.add(new Paragraph('By Oki!'));
  }

  start() {
    const html = this.root.render();
    document.getElementById(this.id).innerHTML = html;
  }
}

const app = new Appliaction('app');
app.start();
