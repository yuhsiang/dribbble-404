import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeCollagePositionClass } from '@containers/App/Main/Styled';
import CollageAdjustItem from './CollageAdjustItem';

let itemId = 0;

const generateId = () => {
  itemId += 1;
  return itemId;
};

export const downloadJSON = (json, fname) => {
  const link = window.document.createElement('a');
  link.setAttribute('href', `data:text;charset=utf-8,${encodeURI(json)}`);
  link.setAttribute('download', `${fname}`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const FloatDownloadButton = styled.button`
  position: fixed;
  right: -100px;
  cursor: pointer;
  bottom: -100px;
  width: 100px;
  height: 35px;
  border: 1px solid #319a21;
  background: #333333;
  color: white;
  border-radius: 10px;
  &:hover{
    opacity: 0.5;
  }
  &:hover{
    opacity: 0.9;
  }
`;

const CollagePositionSetter = ({
  className,
}) => {
  const [points, setPoints] = useState([]);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const leftRef = useRef(0);
  const topRef = useRef(0);

  const handleOnFieldClick = (e) => {
    const {
      clientX,
      clientY,
      currentTarget,
    } = e;

    if (currentTarget.getAttribute('data-type') !== 'item-field') {
      // Let item handle it
      return;
    }
    const {
      width,
      height,
      left,
      top,
    } = currentTarget.getClientRects()[0];
    widthRef.current = width;
    heightRef.current = height;
    leftRef.current = left;
    topRef.current = top;

    const x = Math.round(((clientX - left) / width) * 100);
    const y = Math.round(((clientY - top) / height) * 100);

    const newPoints = [...points, {
      id: generateId(),
      x,
      y,
    }];
    setPoints(newPoints);
  };

  const handleRemoveItem = (id) => {
    const newPoints = points.filter((p) => p.id !== id);
    setPoints(newPoints);
  };

  const handleChangeItemLocation = (id, x, y) => {
    const newPoints = points.map((p) => {
      if (id === p.id) {
        return {
          id,
          x,
          y,
        };
      }
      return p;
    });
    setPoints(newPoints);
  };

  return (
    <div
      role="presentation"
      className={className}
      onClick={handleOnFieldClick}
      data-type={'item-field'}
    >
      {
        points.map((point) => (
          <CollageAdjustItem
            point={point}
            width={widthRef.current}
            height={heightRef.current}
            defaultLeft={leftRef.current}
            defaultTop={topRef.current}
            key={point.id}
            handleRemoveItem={handleRemoveItem}
            handleChangeItemLocation={handleChangeItemLocation}
          />
        ))
      }
      {points.length > 0 && <FloatDownloadButton
        onClick={() => {
          downloadJSON(JSON.stringify(points), 'points.json');
        }}
      >
        下載
      </FloatDownloadButton>}
    </div>
  );
};

CollagePositionSetter.propTypes = {
  className: PropTypes.string,
};

export default makeCollagePositionClass(CollagePositionSetter);
