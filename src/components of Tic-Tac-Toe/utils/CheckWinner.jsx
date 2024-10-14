 export default function  CheckWinner(newBoard) {
  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < combination.length; i++) {
    const [a, b, c] = combination[i];
    if (newBoard[a] === newBoard[b] && newBoard[b] == newBoard[c]) {
      console.log("Combination of winner:", combination[i]);
      return combination[i];
    }
  }
  return null;
};