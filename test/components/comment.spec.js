import Vue from 'vue'
import comment from '@/components/comment'

import { getRenderedVm } from '../utils';

describe('test components/comment.vue', () => {
  it('组件加载后，list', () => {
    let vm = getRenderedVm(comment, {
      list: [
        {
          author: 'author',
          comment: 'comment',
          date: '2017-04-25 15:50:11'
        }
      ]
    });

    expect(vm.list).length === 1;
  });
})