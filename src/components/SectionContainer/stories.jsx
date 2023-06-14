import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ex
          totam pariatur consequuntur possimus deserunt libero sequi provident
          hic repellendus. Eveniet aperiam ipsum cum nemo? Facere, iure facilis.
          Totam, quisquam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
