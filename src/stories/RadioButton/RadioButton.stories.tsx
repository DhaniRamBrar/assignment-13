import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CustomRadioButton from './RadioButton.tsx';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'CustomRadioButton',
  component: CustomRadioButton,
  argTypes: {
    selectedColor: { control: 'color' },
    hoverColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <CustomRadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Option A',
  name: 'customRadioGroup',
  value: 'A',
  selectedColor: '#4CAF50',
  hoverColor: '#8BC34A',
  disabled: false,
  onChange: (selectedValue: string) => console.log('Selected:', selectedValue),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButtonLabel = await canvas.getByTestId('radio-button-label');
  const radioButtonCheckmark = await canvas.getByTestId('radio-button-checkmark');

  // Check if the radio button label is visible
  await expect(radioButtonLabel).toBeVisible();

  // Check if the radio button checkmark is visible
  await expect(radioButtonCheckmark).toBeVisible();
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButtonLabel = await canvas.getByTestId('radio-button-label');
  const radioButtonInput = await canvas.getByTestId('radio-button-input');

  // Check if the radio button label is visible
  await expect(radioButtonLabel).toBeVisible();

  // Check if the radio button input is disabled
  await expect(radioButtonInput).toBeDisabled();

  // Check if the radio button label has disabled styles
  await expect(radioButtonLabel).toHaveStyle('cursor: not-allowed');
  await expect(radioButtonLabel).toHaveStyle('opacity: 0.6');
};
