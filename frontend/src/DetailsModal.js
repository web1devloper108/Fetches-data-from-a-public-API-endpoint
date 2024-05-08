import React, { useEffect, useState } from 'react';

function DetailsModal({ item, heavyComputation, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching details:', error));
  }, [item]);

  useEffect(() => {
    console.log('DetailsModal re-rendered due to props change');
  }, [item]);

  const computedDetails = heavyComputation(item);

  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <h2>{item.title}</h2>
      <p>{details && details.body}</p>
      <div>{computedDetails}</div>
    </div>
  );
}

export default DetailsModal;
