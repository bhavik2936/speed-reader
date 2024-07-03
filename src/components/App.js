import { useState } from 'react';

import Reader from './Reader';
import Typer from './Typer';
import { splitWords } from '../utils';

const App = () => {
  const [words, setWords] = useState([]);
  const [isReading, setIsReading] = useState(false);

  const computeWordsFromParagraph = (paragraph) => {
    setWords(splitWords(paragraph));
  };

  return (
    <>
      {!isReading && (
        <Typer
          computeWordsFromParagraph={computeWordsFromParagraph}
          startReading={() => setIsReading(true)}
        />
      )}
      {isReading && words.length && (
        <Reader
          words={words}
          setWords={setWords}
          finishReading={() => setIsReading(false)}
        />
      )}
    </>
  );
};

export default App;
