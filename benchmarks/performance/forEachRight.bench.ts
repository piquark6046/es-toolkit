import { bench, describe } from 'vitest';
import { forEachRight as forEachRightToolkit } from 'es-toolkit';
import { forEachRight as forEachRightLodash } from 'lodash';

describe('forEachRight', () => {
  bench('es-toolkit/forEachRight', () => {
    forEachRightToolkit([1, 2, 3, 4, 5, 6], x => x + 3);
  });

  bench('lodash/forEachRight', () => {
    forEachRightLodash([1, 2, 3, 4, 5, 6], x => x + 3);
  });
});
