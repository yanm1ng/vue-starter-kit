import mutations from '@/store/mutations'
import state from '@/store/state'

describe('test mutations', () => {
  it('getComments', () => {
    mutations.getComments(state, [
      { author: 'yanm1ng', comment: 'test', date: '2017-04-26 11:22:11' },
      { author: 'rookie', comment: 'test', date: '2017-04-24 09:12:32' }
    ])

    expect(state.home.list).length === 3
  });
  it('addComment', () => {

    mutations.addComment(state, 5)
    
    expect(state.home.list).length === 1 && expect(state.home.comment).toEqual('')
  });
  it('updateComment', () => {

    mutations.updateComment(state, 'new comment')
    
    expect(state.home.comment).toEqual('new comment')
  });
})