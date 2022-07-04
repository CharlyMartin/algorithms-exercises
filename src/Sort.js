import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let swapped = false;

  do {
    swapped = false;

    for (let index = 1; index < nums.length; index++) {
      const a = nums[index - 1];
      const b = nums[index];

      if (a > b) {
        nums[index] = a;
        nums[index - 1] = b;
        swapped = true;
      }
    }
    snapshot(nums);
  } while (swapped);

  return nums;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(32)));
  done();
  return <App />;
}
