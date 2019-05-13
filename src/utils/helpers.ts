import { Component } from '../components/component';

export function isString(type: any): type is string {
  return typeof type === 'string';
}
