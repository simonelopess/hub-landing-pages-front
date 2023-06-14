import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render logo with image', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    screen.getByRole('heading', { name: 'Olá mundo' });
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
