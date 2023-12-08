import { useState } from 'react';

import Speeder from './Speeder';
import Typer from './Typer';

import { PARAGRAPH_TEXT } from '../constants';

const App = () => {
  const [paragraph, setParagraph] = useState(PARAGRAPH_TEXT);
  const [isReading, setIsReading] = useState(false);

  return (
    <>
      {!isReading && (
        <Typer
          paragraph={paragraph}
          setParagraph={setParagraph}
          startReading={() => setIsReading(true)}
        />
      )}
      {isReading && <Speeder paragraph={paragraph} />}
    </>
  );
};

export default App;
