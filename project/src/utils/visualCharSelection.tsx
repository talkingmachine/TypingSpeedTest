export const visualCharSelection = (row: string, selectedChar: number) => {
  const rowSplit = row.split('');
  return (
    <>
      <span className="--typed-text">{rowSplit.slice(0, selectedChar).join('')}</span>
      <u className="--selected-char">{rowSplit[selectedChar]}</u>
      {rowSplit.slice(selectedChar + 1).join('')}
    </>
  );
}