import { useState } from 'react';

import Reader from './Reader';
import Typer from './Typer';

const App = () => {
  const [words, setWords] = useState([]);
  const [isReading, setIsReading] = useState(false);

  return (
    <>
      {!isReading && (
        <Typer setWords={setWords} startReading={() => setIsReading(true)} />
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
