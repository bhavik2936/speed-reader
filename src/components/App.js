import { useState } from 'react';

import Typer from './Typer';
import Speeder from './Speeder';

const App = () => {
  const [paragraph, setParagraph] = useState(process.env.PARA);
  const [isReading, setIsReading] = useState(false);

  const storeParagraph = (paragraph) => {
    setParagraph(paragraph);

    setIsReading(true);
  };

  return (
    <>
      <Typer
        isReading={isReading}
        para={paragraph}
        setParaState={storeParagraph}
      />
      <Speeder isReading={isReading} para={paragraph} />
    </>
  );
};

export default App;
