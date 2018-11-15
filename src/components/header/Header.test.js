import Header from './Header';

describe('Header Component', () => {
  it('should be a header', () => {
    const header = new Header();
    expect(header.render()).toMatchSnapshot();
  });
});
