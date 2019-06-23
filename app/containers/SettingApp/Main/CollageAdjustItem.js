import React, {  useCallback, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
  position: absolute;
  cursor: move;
  width: 2vw;
  height: 2vh
  display: block;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #32a4b1;
  .item-container{
    position: relative;
    display: inline;
    width: 100%;
    height: 100%;
    .item-cancel {
      cursor: pointer;
      position: absolute;
      top: 2px;
      right: 2px;
      &:hover{
        line{
          stroke: "#bbbbbb";
          stroke-width: 3px;
        }
      }
    }
  }
`;

const CollageAdjustItem = ({
  width,
  height,
  defaultLeft,
  defaultTop,
  point,
  handleRemoveItem,
  handleChangeItemLocation,
}) => {
  const isDragging = useRef(null);
  const { id } = point;
  const style = {
    left: `${point.x}%`,
    top: `${point.y}%`,
  };

  const handleRemove = useCallback((e) => {
    e.stopPropagation();
    handleRemoveItem(id);
  }, [handleRemoveItem, id]);

  const handleMouseDown = useCallback(() => {
    const mouseMoveListener = ({
      clientX,
      clientY,
    }) => {
      const x = Math.round(((clientX - defaultLeft) / width) * 100) - 1;
      const y = Math.round(((clientY - defaultTop) / height) * 100) - 1;

      handleChangeItemLocation(id, x, y);
      return false;
    };
    const mouseUpCancelListener = () => {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpCancelListener);
    };
    isDragging.current = mouseMoveListener;
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpCancelListener);
    return false;
  }, [defaultLeft, defaultTop, handleChangeItemLocation, height, id, width]);

  return (
    <Item
      style={style}
      onMouseDown={handleMouseDown}
      onClick={(e) => { e.stopPropagation(); }}
    >
      <div className={'item-container'}>
        <svg
          onClick={handleRemove}
          className={'item-cancel'}
          viewBox="0,0,6,6"
          height="6"
          width="6"
        >
          <line x1="0" y1="0" x2="6" y2="6" stroke="black" strokeWidth="2px"/>
          <line x1="6" y1="0" x2="0" y2="6" stroke="black" strokeWidth="2px"/>
        </svg>
      </div>
    </Item>
  );
};

CollageAdjustItem.propTypes = {
  point: PropTypes.shape({
    id: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  width: PropTypes.number,
  height: PropTypes.number,
  defaultLeft: PropTypes.number,
  defaultTop: PropTypes.number,
  handleRemoveItem: PropTypes.func,
  handleChangeItemLocation: PropTypes.func,
};

export default CollageAdjustItem;

