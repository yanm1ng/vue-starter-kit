import mutations from '@/store/mutations'
import state from '@/store/state'

describe('mutations', () => {
  it('getComments', () => {

    mutations.getComments(state, [1, 2, 3])

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