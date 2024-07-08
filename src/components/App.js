import { useEffect, useState } from 'react';

import Reader from './Reader';
import Typer from './Typer';
import { splitWords } from '../utils';

const App = () => {
  const [words, setWords] = useState([]);
  const [isReading, setIsReading] = useState(false);

  const computeWordsFromParagraph = (paragraph) => {
    setWords(splitWords(paragraph));
  };

  useEffect(() => {
    // Finish reading when no words are left to display
    if (words.length == 0) {
      setIsReading(false);
    }
  }, [words]);

  return isReading ? (
    <Reader words={words} setWords={setWords} />
  ) : (
    <Typer
      computeWordsFromParagraph={computeWordsFromParagraph}
      startReading={() => setIsReading(true)}
    />
  );
};

export default App;
