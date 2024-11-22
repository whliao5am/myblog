// components/Cite.js
import React from 'react';

const Cite = ({ id, index }) => {
  return (
    <a href={`#${id}`} style={{ textDecoration: 'none' }}>
      [{index}]
    </a>
  );
};

export default Cite;