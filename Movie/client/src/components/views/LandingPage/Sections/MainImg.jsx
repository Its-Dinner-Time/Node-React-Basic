import React from 'react';

function MainImg(props) {
  console.log(props);
  return (
    <div
      className="w-full h-[500px] xl:h-[800px] lg:h-[700px] md:h-[600px]"
      style={{
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="max-w-xl p-6" style={{ position: 'absolute', bottom: '0', left: '0' }}>
        <h2 className="text-white text-2xl pb-3">{props.title}</h2>
        <div className="text-white">{props.text}</div>
      </div>
    </div>
  );
}

export default MainImg;
