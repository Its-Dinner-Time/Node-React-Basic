import React from 'react';
import { IMG_API_URL } from '../../Config';
import { Link } from 'react-router-dom';

function GridCards(props) {
  const { list, isLinked } = props;

  return (
    <div className="grid gap-4 p-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
      {list &&
        list.map((item, idx) => {
          return (
            <div key={idx}>
              {isLinked === true ? (
                <Link to={`/movie/${item.id}`}>
                  <img src={`${IMG_API_URL}original${item.path}`} alt={item.alt} />
                </Link>
              ) : (
                <img src={`${IMG_API_URL}original${item.path}`} alt={item.alt} />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default GridCards;
