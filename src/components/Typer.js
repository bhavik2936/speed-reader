const Typer = ({
  paragraph,
  setParagraph,
  computeWordsFromParagraph,
  startReading,
}) => {
  const handleSubmit = (event) => {
    // Prevents the form from submitting
    event.preventDefault();
    computeWordsFromParagraph(paragraph);
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
