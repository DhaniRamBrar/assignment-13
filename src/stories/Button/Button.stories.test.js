import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories'; 

const { Default, Disabled } = composeStories(stories);

describe('Button Component', () => {
  it('should be visible', () => {
    render(<Default />);
    const button = screen.getByRole('button', { name: /default button/i });
    expect(button).toBeVisible();
  });

  it('should have reduced opacity when disabled', () => {
    render(<Disabled />);
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.6'); 
  });
});
