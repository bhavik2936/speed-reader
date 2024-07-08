import { useEffect, useState } from 'react';

import Reader from './Reader';
import Typer from './Typer';

import { PARAGRAPH_TEXT } from '../constants';
import { splitWords } from '../utils';

const App = () => {
  const [paragraph, setParagraph] = useState(PARAGRAPH_TEXT);
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
      paragraph={paragraph}
      setParagraph={setParagraph}
      computeWordsFromParagraph={computeWordsFromParagraph}
      startReading={() => setIsReading(true)}
    />
  );
};

export default App;
