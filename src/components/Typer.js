import { useState } from "react";

const Typer = ({isReading, para, setParaState}) => {
  const [paragraph, setParagraph] = useState(para);

  const handleSubmit = (event) => {
    // prevent the form from submitting
    event.preventDefault();
    setParaState(paragraph);
  }

  return (
    isReading ? null : (
      <form onSubmit={handleSubmit}>
        <div>
          <textarea value={paragraph} rows="10" cols="50" onChange={(e) => setParagraph(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Speed It" />
        </div>
      </form>
    )
  );
};

export default Typer;
