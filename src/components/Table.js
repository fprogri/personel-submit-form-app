import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table(props) {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
}

export default Table;
