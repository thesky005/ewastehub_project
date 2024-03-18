import React from 'react';

const MyChatComponent = () => {
  return (
    <div>
      {/* Your other components */}
      <iframe
        src="https://app.fastbots.ai/embed/cltx71nyy0007swb42meqv1d7"
        title="Fastbots Chat"
        style={{
          margin : '56px 0 0 170px',
          marginLeft:'250px',
          width : '70%',
          height: '500px', // Adjust the height as needed
          border: 'none',
        }}
      ></iframe>
    </div>
  );
}

export default MyChatComponent;
