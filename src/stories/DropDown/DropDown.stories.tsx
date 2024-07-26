import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Dropdown from './DropDown.tsx';
import { DropdownProps } from './DropDown.types';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    multiSelect: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const EnhancedDropdown = Template.bind({});
EnhancedDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  placeholder: 'Select options',
  multiSelect: true,
  disabled: false,
  onChange: (selectedOption) => console.log('Selected option:', selectedOption),
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  ...EnhancedDropdown.args,
  disabled: true,
};

EnhancedDropdown.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = await canvas.getByTestId('dropdown');

  // Check if the dropdown is visible
  await expect(dropdown).toBeInTheDocument();

  const select = await canvas.getByTestId('select');
  // clicking the dropdown to open options
  await userEvent.click(select);

  const optionsContainer = await canvas.getByTestId('options-container');
  // Check if the options container is visible
  await expect(optionsContainer).toBeVisible();

  const option = await canvas.getByTestId('option-0');
  // selecting an option
  await userEvent.click(option);

  // Check if the selected option is displayed in the select element
  await expect(select).toHaveTextContent('Option 1');
};

DisabledDropdown.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const select = await canvas.getByTestId('select');

  // Check if the dropdown is visible
  await expect(select).toBeInTheDocument();

  // Check if the dropdown is disabled by checking the background color
  await expect(select).toHaveStyle('background-color: #f0f0f0');

  // clicking the dropdown
  await userEvent.click(select);

  const optionsContainer = canvas.queryByTestId('options-container');
  // Ensure the options container is not rendered 
  await expect(optionsContainer).not.toBeInTheDocument();
};
