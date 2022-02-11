function TableBody(x) {
  const rows = x.characterData.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.name}</td>
        <td>{element.surname}</td>
        <td>{element.job}</td>
        <td>
          <button onClick={() => x.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
export default TableBody;
