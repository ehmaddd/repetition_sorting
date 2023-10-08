function sortByFrequency(arr) {
    const frequencyMap = {};
    arr.forEach((num) => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
  }

  const numbers = [4, 2, 2, 8, 4, 6, 4, 8, 2, 4, 4, 6, 10];
  const sortedArray = sortByFrequency(numbers);
//   console.log(sortedArray);
