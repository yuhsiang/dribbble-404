import React from 'react';
import PropTypes from 'prop-types';
import CollagePositionSetter from './CollagePositionSetter';
import { makeCollageSectionClass } from '@containers/App/Main/Styled';


const CollageSection = ({
  className,
}) => (
  <section className={className}>
    <h1>404</h1>
    <CollagePositionSetter />
  </section>
);

CollageSection.propTypes = {
  className: PropTypes.string,
};

export default makeCollageSectionClass(CollageSection);

