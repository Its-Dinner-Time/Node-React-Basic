import React from 'react';

function MainImg(props) {
  return (
    <div
      className="w-full h-[400px] xl:h-[700px] lg:h-[600px] md:h-[500px] relative"
      style={{
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-xl p-6 absolute bottom-0 left-0">
        <h2 className="text-white text-2xl pb-3">{props.title}</h2>
        <div className="text-white">{props.text}</div>
      </div>
    </div>
  );
}

export default MainImg;
