import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeCollageSectionClass } from './Styled';

import CollageImage from './CollageImage';

const CollageSection = ({
  className,
}) => {
  const [imagePoints, setImagePoints] = useState([]);
  useEffect(() => {
    fetch('/points.json').then((resp) => resp.json()).then((data) => {
      setImagePoints(data);
    });
  }, []);

  const hasListLoaded = imagePoints.length > 0;
  const hintStyle = {
    opacity: hasListLoaded ? 0 : 1,
  };
  console.log(imagePoints);
  return (
    <section className={className}>
      <h1 style={hintStyle}>404</h1>
      <div>
        {
          imagePoints.map((point) => {
            const {
              id,
            } = point;
            return <CollageImage key={id} point={point}/>;
          })
        }
      </div>
    </section>
  );
};



CollageSection.propTypes = {
  className: PropTypes.string,
};

export default makeCollageSectionClass(CollageSection);

