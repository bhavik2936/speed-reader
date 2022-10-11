const Speeder = ({ isReading, para }) => {
  return (
    <div>
      { isReading && para }
    </div>
  );
};

export default Speeder;
