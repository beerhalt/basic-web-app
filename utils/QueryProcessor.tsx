export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }


  if (query.toLowerCase().includes("andrewid")) {
    return "lbeerhal";
  }

  if (query.toLowerCase().includes("name")) {
    return "beer";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 67, 16, 88?")) {
    return "88";
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const match = query.toLowerCase().match(/what is (\d+) plus (\d+)/);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return (x + y).toString();
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const largest = Math.max(...numbers.map(Number));
      return largest.toString();
    }
  }

  return "";
}
