import React, { useMemo } from 'react';

function ListItem({ item, heavyComputation, onItemClick }) {
  const computedDetails = useMemo(() => heavyComputation(item), [item, heavyComputation]);

  return (
    <li onClick={() => onItemClick(item)}>
      <strong>{item.id}</strong> - {item.title}
      <div>{computedDetails}</div>
    </li>
  );
} 

export default ListItem;
