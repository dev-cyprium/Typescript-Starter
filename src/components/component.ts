import { isString } from '../utils/helpers';

type childrenVNodes = (VNode|string)[];
type tagType = string | Type<Component>;

interface Type<T> extends Function { new (...args: any[]): T; }

export type creator = (tag: tagType, opts: any, children: childrenVNodes) => VNode;

export interface VNode {
  tagName: string;
  attrs: {};
  children: childrenVNodes;
}

const createComponent: creator = function (tag, attrs, children) {
  const vElm = Object.create(null);

  if (!isString(tag)) {
    // TODO: we need to pass down the attrs and the children to the component
    const instance = new tag;
    return instance.render(createComponent);
  }

  return Object.assign(vElm, {
    attrs,
    children,
    tagName: tag,
  });
};

export interface Component {
  render(h: creator): VNode;
}

export { createComponent };
