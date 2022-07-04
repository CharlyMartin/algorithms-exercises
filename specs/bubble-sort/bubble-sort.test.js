/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapped = false;

  // The do...while statement loops until the test condition evaluates to false.
  // The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
  do {
    swapped = false;

    // We start the loop at 1 so that the last run is not undefined.
    // Even though it would still work fine with undefined.
    for (let index = 1; index < nums.length; index++) {
      const a = nums[index - 1];
      const b = nums[index];

      if (a > b) {
        nums[index - 1] = b;
        nums[index] = a;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
