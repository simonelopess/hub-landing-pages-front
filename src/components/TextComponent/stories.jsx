import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Reiciendis architecto eveniet ratione consequuntur modi nesciunt possimus
    veniam dolor, dicta laudantium voluptatem animi omnis eaque sint minima
    excepturi delectus, labore totam!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
