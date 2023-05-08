import { useState } from "react";
import { TypingTestSentence } from "../components/typingTestSentence";
import { TypingTestStatsBar } from "../components/typingTestStatsBar";

const TypingTest = () => {
  const [charsInARow, setCharsInARow] = useState(0);

  return (
    <div className="container-fluid">
      <section className="typing-test-screen">
        <TypingTestStatsBar charsInARow={charsInARow}/>
        <TypingTestSentence setCharsInARow={setCharsInARow}/>
      </section>
    </div>
  );
}

export {TypingTest};