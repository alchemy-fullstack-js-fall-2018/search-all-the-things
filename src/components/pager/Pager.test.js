import Pager from './Pager';

describe('Pager Component', () => {
  it('should be a pager', () => {
    const pager = new Pager({
      currentPage: 1,
      totalPages: 5,
      updatePage: () => { return null; }
    });
    expect(pager.render()).toMatchSnapshot();
  });
});
