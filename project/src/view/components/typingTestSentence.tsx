import { useState } from "react";
import { visualCharSelection } from "../../utils/visualCharSelection";

const TypingTestSentence = () => {
  const mockAPIData = 'Perferendis aliquid cumque, laudantium id maiores aspernatur. Expedita distinctio iste laudantium, explicabo eius fuga voluptate dolore animi voluptates, obcaecati, repellendus eligendi soluta!';
  // DELETE NEXT LINE
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedChar, setSelectedChar] = useState(4);


  return (
    <div className="row typing-test__sentence">
      <div className="col-12">
        <div className="typing-test__text">{visualCharSelection(mockAPIData, selectedChar)}</div>
      </div>
    </div>
  );
}

export {TypingTestSentence};
