import React from 'react';
import useInput from './useInput';
import Previewer from './Previewer';
import './Editor.css';

function Editor() {
  const initialVal = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
      
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

\`\`\`
const a = []
\`\`\`

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!


* And of course there are lists.
  * Some are bulleted.
    * With different indentation levels.
      * That look like this.
    
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
    
![React Logo w/ Text](https://goo.gl/Umyytc)
`;
  const [text, updateText, resetText] = useInput(initialVal);
  return (
    <>
      <label for='editor' className='nav'>
        Editor
      </label>
      <textarea
        id='editor'
        name='editor'
        value={text}
        onChange={updateText}
      ></textarea>
      <p id='buttonArea'>
        <button onClick={resetText} id='button'>
          Reset
        </button>
      </p>

      <Previewer text={text} />
    </>
  );
}

export default Editor;
