import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Heading {...args} />;
