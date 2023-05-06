import { TypingTestSentence } from "../components/typingTestSentence";
import { TypingTestStatsBar } from "../components/typingTestStatsBar";

const TypingTest = () => {
  return (
    <div className="container-fluid">
      <section className="typing-test-screen">
        <TypingTestStatsBar/>
        <TypingTestSentence/>
      </section>
    </div>
  );
}

export {TypingTest};