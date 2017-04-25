import Vue from 'vue'
import header from '@/components/header'

import { getRenderedVm } from '../utils';

describe('test components/header.vue', () => {
  it('组件加载后，title应该是「test」', () => {
    let vm = getRenderedVm(header, {
      title: 'test'
    });

    expect(vm.title).toEqual('test');
  });
})