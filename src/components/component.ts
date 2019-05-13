export interface VNodeMeta {
  text?: string;
  component: Component | string;
}

export interface ComponentArgs {
  type: string | Component;
  text?: string;
  children?: Component[];
}

export interface VNode {
  tagName: string;
  attrs: {};
  children: any[];
}

export type creator = (tag: string, opts: any, children: (VNode|string)[]) => VNode;

const createComponent: creator = function (tag, attrs, children) {
  const vElm = Object.create(null);

  return Object.assign(vElm, {
    attrs,
    children,
    tagName: tag,
  });
};

export interface Component {
  render(h: creator): Component;
}

export { createComponent };
