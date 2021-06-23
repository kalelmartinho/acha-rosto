import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="f3">
        {`${name}, já encontramos rostos em ${entries} imagens para você.`}
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};

export default Rank;
