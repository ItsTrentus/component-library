import { Button } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs', 'bacon'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'I am a button!',
    },
};
