import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Card from './Card.tsx';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
    alignText: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
    hoverEffect: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const InteractiveCard = Template.bind({});
InteractiveCard.args = {
  title: 'Card',
  content: 'This is an card. It can contain images, align text, and even have a hover effect!',
  hoverEffect: true,
  backgroundColor: '#f0f0f0',
};

InteractiveCard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = await canvas.getByTestId('card');
  await userEvent.hover(card);
};
