import { Meta, StoryObj } from '@storybook/angular';

import { InputTextComponent } from './input-text.component';

type ComponentWithCustomControls = InputTextComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Input Text',
  component: InputTextComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `InputText` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const InputText: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
