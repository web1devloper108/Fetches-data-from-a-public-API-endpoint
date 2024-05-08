import React, { useState, useEffect, useCallback } from 'react';
import ListItem from './ListItem';
import DetailsModal from './DetailsModal';

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const heavyComputation = useCallback(item => {
    const startTime = performance.now();
    const result = `Computed details for item ${item.id}`;
    const endTime = performance.now();
    console.log(`Heavy computation time for item ${item.id}: ${endTime - startTime} milliseconds`);
    return result;
  }, []);

  const handleItemClick = useCallback(item => {
    setSelectedItem(item);
  }, []);

  return (
    <div className="App">
      <h1>Items List</h1>
      <ul>
        {data.map(item => (
          <ListItem
            key={item.id}
            item={item}
            heavyComputation={heavyComputation}
            onItemClick={handleItemClick}
          />
        ))}
      </ul>
      {selectedItem && (
        <DetailsModal
          item={selectedItem}
          heavyComputation={heavyComputation}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default App;
