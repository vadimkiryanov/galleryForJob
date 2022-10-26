import React from 'react';

const Folders = ({ title }) => {
  return (
    <div className="folder">
      <div className="folder__image">
        <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0 -1028.4)">
            <path
              d="m2 1033.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.89543 2 2 2h20c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-20z"
              fill="#2980b9"
            />
            <path
              d="m3 1029.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h11 5 2c1.105 0 2-0.9 2-2v-9-3c0-1.1-0.895-2-2-2h-2-5-1l-3-2h-7z"
              fill="#2980b9"
            />
            <path d="m23 1042.4v-8c0-1.1-0.895-2-2-2h-11-5-2c-1.1046 0-2 0.9-2 2v8h22z" fill="#bdc3c7" />
            <path
              d="m2 1033.4c-1.1046 0-2 0.9-2 2v6 1 6c0 1.1 0.89543 2 2 2h20c1.105 0 2-0.9 2-2v-6-1-6c0-1.1-0.895-2-2-2h-20z"
              fill="#3498db"
            />
          </g>
        </svg>
      </div>
      <div className="folder__title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Folders;