import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render grtid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grtid content background false', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={false} />,
    );
    expect(container).toMatchSnapshot();
  });
});
