import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  titleColor?: string;
}

interface SubtitleProps {
  subtitleColor?: string;
}

const Section = styled.section<{
  backgroundImage: string;
  parallaxEffect?: boolean;
  overlayColor?: string;
  textColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: 'small' | 'medium' | 'large';
}>`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.textAlign === 'left' ? 'flex-start' : props.textAlign === 'right' ? 'flex-end' : 'center')};
  padding: 20px;
  overflow: hidden;
  color: ${(props) => props.textColor || '#fff'};
  text-align: ${(props) => props.textAlign || 'center'};
  font-size: ${(props) => (props.fontSize === 'small' ? '14px' : props.fontSize === 'medium' ? '18px' : '24px')};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.overlayColor || 'rgba(0, 0, 0, 0.3)'};
  }
`;

const Title = styled.h1<TitleProps>`
  color: ${props => props.titleColor || '#FFFFFF'};
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.h2<SubtitleProps>`
  color: ${props => props.subtitleColor || '#FFFFFF'};
  position: relative;
  z-index: 1;
  font-weight: 300;
`;

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  titleColor,
  subtitleColor,
}) => {
  return (
    <Section  data-testid="hero-section"   backgroundImage={backgroundImage} >
      <Title titleColor={titleColor}>{title}</Title>
      {subtitle && <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle>}
    </Section>
  );
};

export default HeroSection;
