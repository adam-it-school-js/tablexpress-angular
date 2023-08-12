import { Meta, StoryObj } from '@storybook/angular';

import { InputCheckboxComponent } from './input-checkbox.component';

type ComponentWithCustomControls = InputCheckboxComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Input Checkbox',
  component: InputCheckboxComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `InputCheckbox` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const InputCheckbox: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
