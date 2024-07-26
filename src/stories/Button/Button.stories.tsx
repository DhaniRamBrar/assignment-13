import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Button from './Button.tsx';
import { ButtonProps } from './button.types';

export default {
  title: 'New Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  label: 'Outline Button',
  variant: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

Disabled.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: args.label });
  await expect(button).toBeInTheDocument();
  await expect(button).toBeDisabled();
  await expect(button).toHaveStyle('cursor: not-allowed');
  await expect(button).toHaveStyle('opacity: 0.6');
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: args.label });
  await expect(button).toBeInTheDocument();
  await userEvent.click(button);
};
