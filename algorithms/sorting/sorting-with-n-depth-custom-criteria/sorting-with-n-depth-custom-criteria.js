function deepSort(arr, criteria) {
  return arr.sort((a, b) => compareByCriteria(a, b, criteria));
}

function compareByCriteria(a, b, criteria, index = 0) {
  if (index >= criteria.length) {
    return 0;
  }

  const criterion = criteria[index];
  const aValue = a[criterion.key];
  const bValue = b[criterion.key];

  if (aValue === bValue) {
    return compareByCriteria(a, b, criteria, index + 1);
  }

  const compareResult = aValue < bValue ? -1 : 1;
  return criterion.direction === 'asc' ? compareResult : -compareResult;
}

// Example usage
const data = [
  { name: 'John', age: 30, score: 90 },
  { name: 'Alice', age: 25, score: 85 },
  { name: 'Bob', age: 30, score: 80 },
  { name: 'Eve', age: 25, score: 90 }
];

const sortingCriteria = [
  { key: 'age', direction: 'asc' },
  { key: 'score', direction: 'desc' }
];

const sortedData = deepSort(data, sortingCriteria);
console.log(sortedData);