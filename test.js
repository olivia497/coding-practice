const haystack = ['bison', 'apple', 'needle', 'chair']

function findNeedle(haystack) {
  let needleIndex = haystack.indexOf('needle');
  console.log(`found in position ${needleIndex}`)
};

findNeedle(haystack);

