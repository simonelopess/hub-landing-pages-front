import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'https://localhost',
  },
};

export const WithImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const WithoutImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

WithoutImage.args = {
  srcImg: '',
};
