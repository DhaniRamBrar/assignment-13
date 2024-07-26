import React from "react";
import styled, { css } from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ borderColor: string; borderWidth: number; boxShadow: boolean }>`
  border-collapse: collapse;
  width: 100%;
  border: ${({ borderWidth, borderColor }) => `${borderWidth}px solid ${borderColor}`};
  box-shadow: ${({ boxShadow }) => (boxShadow ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  margin: 20px 0;
  font-family: 'Arial, sans-serif';
`;

const TableCell = styled.td<{ cellColors: string; fontSize: string; textColor: string; }>`
  padding: 12px 15px;
  background-color: ${({ cellColors }) => cellColors};
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th<{ fontSize: string; textColor: string; headerBgColor: string; }>`
  background-color: ${({ headerBgColor }) => headerBgColor};
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  padding: 12px 15px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const TableRow = styled.tr<{ rowHoverEffect: boolean; stripe: boolean; stripeColor: string }>`
  ${({ stripe, stripeColor, rowHoverEffect }) =>
    stripe &&
    css`
      &:nth-child(even) {
        background-color: ${stripeColor};
      }
      ${rowHoverEffect &&
      css`
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}
    `}
`;

function Table({
  headers,
  rows,
  cellColors = "white",
  borderColor = "#387ADF",
  borderWidth = 1,
  fontSize = "16px",
  textColor = "#000",
  headerBgColor = "#007bff",
  rowHoverEffect = false,
  boxShadow = true,
  stripe = false,
  stripeColor = "#f9f9f9",
}: TableProps) {
  return (
    <StyledTable borderColor={borderColor} borderWidth={borderWidth} boxShadow={boxShadow} data-testid="styled-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index} fontSize={fontSize} textColor={textColor} headerBgColor={headerBgColor}>
              {header}
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex} rowHoverEffect={rowHoverEffect} stripe={stripe} stripeColor={stripeColor}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex} cellColors={cellColors} fontSize={fontSize} textColor={textColor}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
