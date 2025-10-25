// Test case for issue #34971
// Variables mutated inside for loops should not be hoisted outside memoization
import {useMemo} from 'react';

function Component({items}) {
  const {a, b} = useMemo(() => {
    let a = 0;
    const b = [];
    for (const id of items) {
      if (id % 2 === 0) {
        b.push(id);
        a++;
      } else {
        b.push(-id);
      }
    }
    return {a, b};
  }, [items]);

  return {a, b};
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{items: [1, 2, 3, 4, 5]}],
};


