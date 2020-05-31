import React from 'react';
import marked from 'marked';
import './Previewer.css';

function Previewer({ text }) {
  var markedText = marked(text);
  console.log(markedText);
  return (
    <>
      <h1 class='nav2'>Previewer</h1>
      <div id='preview' dangerouslySetInnerHTML={{ __html: markedText }}></div>
    </>
  );
}

export default Previewer;
