import { Meta, StoryObj } from '@storybook/angular';

import { AuthComponent } from './auth.component';

type ComponentWithCustomControls = AuthComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Auth',
  component: AuthComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Auth` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Auth: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
