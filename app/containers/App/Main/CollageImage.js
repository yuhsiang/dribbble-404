import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageLink = styled.a`
  position: absolute;
  width: 7%;
  transform: scale(0.9);
  transition: all 1s ease-in;
  
  &.loaded{
    transition: all 0.1s ease-in;
  }
  img{
    width: 100%;
    border-radius: 0.125rem;
  }
  &:hover{
    transform: scale(1.2) !important;
    z-index: 1;
  }
`;

const CollageImage = ({
  point,
}) => {
  const initialZ = Math.random() * 500;
  const [translateZ, setTranslateZ] = useState(initialZ);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);
  const [isTransitionDone, setIsTransitionDone] = useState(false);
  const {
    id,
    x,
    y,
  } = point;
  const style = {
    left: `${x}%`,
    top: `${y}%`,
    transform: `translateZ(${translateZ}px) scale(0.9)`,
  };

  useEffect(() => {
    const waitTime = (Math.random() * 200) + (id * 50);
    setTimeout(() => {
      setShouldLoadImage(true);
    }, waitTime);
  }, [id]);

  const imageOnload = () => {
    setTranslateZ(0);
    setTimeout(() => {
      setIsTransitionDone(true);
    }, 1000);
  };

  const loadedClass = setTranslateZ !== 0 && isTransitionDone ? 'loaded' : '';
  return (
    <ImageLink
      href={'http://jadesheep.com'}
      style={style}
      className={loadedClass}
    >
      {
        shouldLoadImage && (
          <img
            src={`${point.id}.png`}
            onLoad={imageOnload}
            alt={point.id}
          />
        )
      }
    </ImageLink>
  );
};


CollageImage.propTypes = {
  point: PropTypes.shape({
    id: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default CollageImage;
