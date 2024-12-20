import type { Meta, StoryObj } from '@storybook/react';
import TpButton from './Button';

const meta = {
  title: 'TpButton',
  component: TpButton,
  argTypes: {},
} satisfies Meta<typeof TpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
