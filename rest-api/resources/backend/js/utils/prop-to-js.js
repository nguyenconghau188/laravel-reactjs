import React from 'react';
import { Iterable } from 'immutable';
import getDisplayName from 'recompose/getDisplayName';
import { toPairs } from 'lodash';

export default function propsToJS(WrappedComponent) {
  function PropsToJs(wrappedComponentProp) {
    const KEY = 0;
    const VALUE = 1;

    const propsJS = toPairs(wrappedComponentProp)
                      .reduce((newProps, wrappedComponentProp) => {
                        newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE]) 
                                                                ? wrappedComponentProp[VALUE].toJS() 
                                                                : wrappedComponentProp[VALUE];
                        return newProps;
                      }, {});
  }
  PropsToJs.getDisplayName = `PropsToJS${getDisplayName(WrappedComponent)}`;
  return PropsToJs;
}