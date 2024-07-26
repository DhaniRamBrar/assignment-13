import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Text from './Text.tsx';
import { TextProps } from "./Text.types.tsx";

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { 
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
    letterSpacing: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'This is Text',
  color: '#007BFF',
  fontSize: '20px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  letterSpacing: '2px',
};

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.getByTestId('text-element');
  await expect(textElement).toBeVisible();
};
