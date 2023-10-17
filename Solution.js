function sortByFrequency(arr) {
    const frequencyMap = {};
    arr.map((element)=> {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    console.log(frequencyMap);
    // arr.sort((a, b) => {
    //     const freqA = frequencyMap[a];
    //     const freqB = frequencyMap[b];

    //     // Sort by frequency in ascending order
    //     if (freqA !== freqB) {
    //       return freqA - freqB;
    //     } else {
    //       // If frequencies are the same, sort in descending order
    //       return b - a;
    //     }
    // });
    // return arr;
  }

  const numbers = [4, 2, 2, 8, 4, 6, 4, 8, 2, 4, 4, 6, 10];
  const sortedArray = sortByFrequency(numbers);
//   console.log(sortedArray);
