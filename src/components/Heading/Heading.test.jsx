import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { convertHexToRGBA } from '../../utils';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle(`
      color: ${convertHexToRGBA(theme.colors.primaryColor)},
      font-size: ${theme.font.sizes.xhuge},
      text-transform: none,
      `);
  });

  it('should render with white color', () => {
    renderTheme(<Heading colordark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle(`
      color: ${convertHexToRGBA(theme.colors.white)},
      `);
  });

  it('should render with differentes sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle(`
    color: ${convertHexToRGBA(theme.colors.primaryColor)},
    font-size: ${theme.font.sizes.medium},
    `);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle(`
    color: ${convertHexToRGBA(theme.colors.primaryColor)},
    font-size: ${theme.font.sizes.large},
    `);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle(`
    color: ${convertHexToRGBA(theme.colors.primaryColor)},
    font-size: ${theme.font.sizes.xlarge},
    `);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle(`
    color: ${convertHexToRGBA(theme.colors.primaryColor)},
    font-size: ${theme.font.sizes.xhuge},
    `);
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle(`
    color: ${convertHexToRGBA(theme.colors.primaryColor)},
    text-transform: uppercase,
    `);
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
