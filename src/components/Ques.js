export default function Ques({ idx, question, options, setAnswers }) {
  function selectedAnsHandler(e) {
    console.log({ idx });
    setAnswers((prevAns) => {
      prevAns[idx] = e.target.value;
      console.log(e.target.name);
      return prevAns;
    });
  }

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name={question}
                value={option}
                onChange={selectedAnsHandler}
                required
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
