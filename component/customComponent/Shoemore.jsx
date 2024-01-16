import React, { useState } from 'react'

const Shoemore = (props) => {
  const { description } = props;
  const maxLength = 100;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card__div ${isExpanded ? 'show-full' : ''}`}>
      <p className="card__descr text-app">
        {isExpanded ? description : description.slice(0, maxLength)}
      </p>
      {description.length > maxLength && (
        <p className="show-more fntSz15 text-primary" onClick={toggleExpanded}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </p>
      )}
    </div>
  );
}

export default Shoemore