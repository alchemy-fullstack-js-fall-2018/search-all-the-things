import SearchBox from './SearchBox';

describe('SearchBox Component', () => {
  it('should be a searchBox', () => {

    const searchBox = new SearchBox({
      query: 'dog',
      pageSize: 20,
      onChange: () => { return null; },
      onPageSize: () => { return null; },
      onSearch: () => { return null; }
    });
    expect(searchBox.render()).toMatchSnapshot();
  });
});
