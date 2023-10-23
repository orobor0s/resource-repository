function deepSort(arr, criteria) {
    return arr.sort((a, b) => compareByCriteria(a, b, criteria));
}

function compareByCriteria(a, b, criteria, index = 0) {
    // if there are no more criteria, return that the two elements are equal
    if (index >= criteria.length) {
        return 0;
    }

    // sets the current criterion and the values associated with it for the current elements
    const criterion = criteria[index];
    const aValue = a[criterion.key];
    const bValue = b[criterion.key];

    // if the elements are deemed equal, apply the next criterion
    if (aValue === bValue) {
        return compareByCriteria(a, b, criteria, index + 1);
    }

    // compares the two elements
    const compareResult = aValue < bValue ? -1 : 1;
    // corrects for direction
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