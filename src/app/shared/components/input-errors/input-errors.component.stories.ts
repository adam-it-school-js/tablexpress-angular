import { Meta, StoryObj } from '@storybook/angular';

import { InputErrorsComponent } from './input-errors.component';

type ComponentWithCustomControls = InputErrorsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Input Errors',
  component: InputErrorsComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `InputErrors` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const InputErrors: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
