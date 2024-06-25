import React from 'react'
var htmlToImage = require('html-to-image');

const Htmltojpg = () => {

  const handleDownloadClick = () => {
    const content = document.getElementById('content');

    htmlToImage.toJpeg(content)
      .then((image) => {
        const link = document.createElement('a');
        link.download = 'my-image.jpeg';
        link.href = image;
        link.click();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div id="content" 
      style={{
        width: '400px',
        height: '300px',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '30px',
        color: 'white'
      }}
      >
        Hello world
      </div>
      <button onClick={handleDownloadClick}>Download Image</button>
    </div>
  )
}

export default Htmltojpg