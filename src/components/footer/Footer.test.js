import Footer from './Footer';

describe('Footer Component', () => {
  it('should be a footer', () => {
    const footer = new Footer();
    expect(footer.render()).toMatchSnapshot();
  });
});
