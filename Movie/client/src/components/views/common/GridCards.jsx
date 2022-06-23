import React from 'react';
import { IMG_API_URL } from '../../Config';

function GridCards(props) {
  const { list } = props;
  console.log(list);
  return (
    <div className="grid gap-4 p-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
      {list &&
        list.map((item, idx) => {
          return (
            <div key={idx}>
              <img src={`${IMG_API_URL}original${item.poster_path}`} alt={item.original_title} />
            </div>
          );
        })}
    </div>
  );
}

export default GridCards;
