import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import HeroSection from './HeroImg.tsx';
import { HeroSectionProps } from './HeroImg.types';

export default {
  title: 'HeroSection',
  component: HeroSection,
  argTypes: {
    backgroundImage: {
      control: 'text',
      description: 'URL of the background image',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    titleColor: {
      control: 'color',
    },
    subtitleColor: {
      control: 'color',
    },
  },
} as Meta;

const Template: StoryFn<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const DefaultHeroSection = Template.bind({});
DefaultHeroSection.args = {
  backgroundImage: 'https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'This is My Portfolio',
  subtitle: 'This is Paragraph',
  titleColor: '#FFFFFF',
  subtitleColor: '#F0F0F0',
};

DefaultHeroSection.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heroSection = await canvas.getByTestId('hero-section');

  // Check if the hero section is visible
  await expect(heroSection).toBeVisible();
};
