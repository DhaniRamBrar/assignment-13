import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TableProps } from './Table.types';
import Table from './Table.tsx';

export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Address'],
  rows: [
    ['John Doe', '30', '123 Main St, Springfield, USA'],
    ['Jane Smith', '25', '456 Maple Ave, Springfield, USA'],
    ['Sam Green', '35', '789 Oak Dr, Springfield, USA'],
    ['Emily White', '28', '321 Birch St, Springfield, USA'],
    ['Michael Brown', '40', '654 Pine St, Springfield, USA'],
  ],
  cellColors: "#f5f5f5",
  borderColor: "#ddd",
  borderWidth: 1,
  fontSize: "14px",
  textColor: "#333",
  headerBgColor: "#007bff",
  rowHoverEffect: true,
  boxShadow: true,
  stripe: true,
  stripeColor: "#f9f9f9",
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const table = await canvas.getByTestId('styled-table');
  await expect(table).toBeVisible();
};
