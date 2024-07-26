import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const CardWrapper = styled.div<{
  $hoverEffect?: boolean;
  $backgroundColor?: string;
  $borderStyle?: string;
  $borderColor?: string;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#fff'};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px;
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  border: ${({ $borderStyle, $borderColor }) =>
    `${$borderStyle || 'none'} ${$borderColor || 'transparent'}`};

  ${({ $hoverEffect }) =>
    $hoverEffect &&
    css`
      &:hover {
        transform: translateY(-5px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 20px;
      }
    `}
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div<{
  $alignText: 'left' | 'center' | 'right';
}>`
  padding: 20px;
  text-align: ${({ $alignText }) => $alignText};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

function Card({
  title,
  content,
  imageUrl,
  alignText = 'left',
  hoverEffect = false,
  backgroundColor,
  borderStyle,
  borderColor,
}: CardProps) {
  return (
    <CardWrapper
      data-testid="card"
      $hoverEffect={hoverEffect}
      $backgroundColor={backgroundColor}
      $borderStyle={borderStyle}
      $borderColor={borderColor}
    >
      {imageUrl && <CardImage src={imageUrl} alt="Card image" />}
      <CardContent $alignText={alignText}>
        <h2>{title}</h2>
        <p>{content}</p>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;

export function CardGroup({ cards }: { cards: CardProps[] }) {
  if (!cards || cards.length === 0) {
    return <div>No cards available</div>;
  }

  return (
    <CardContainer>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </CardContainer>
  );
}
