import { Component, creator, VNode } from './component';

export enum HeadingType {
  h1 = 1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

export class Heading implements Component {
  render(h: creator) : VNode {
    return h('h1', {}, ['This is some text']);
  }
}
