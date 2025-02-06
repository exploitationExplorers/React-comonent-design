import Button from './index';

import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

const meta = {
    title: 'Components/EButton',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
    args: {
        disabled: true,
        label: 'Button',
    },
};
