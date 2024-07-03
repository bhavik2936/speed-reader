import { useState } from 'react';

import { PARAGRAPH_TEXT } from '../constants';
import { splitWords } from '../utils';

const Typer = ({ setWords, startReading }) => {
  const [paragraph, setParagraph] = useState(PARAGRAPH_TEXT);

  const handleSubmit = (event) => {
    // Prevents the form from submitting
    event.preventDefault();
    setWords(splitWords(paragraph));
    startReading();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={paragraph}
          rows="10"
          cols="50"
          onChange={(e) => setParagraph(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Read" />
      </div>
    </form>
  );
};

export default Typer;
