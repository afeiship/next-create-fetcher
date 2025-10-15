# next-create-fetcher
> Create a resource fetcher.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-create-fetcher
```

## usage
```js
import '@jswork/next-create-fetcher';

const fetcher = nx.createFetcher('user', {
  page: 'page',
  size: 'size',
  dataPath: 'data',
  totalPath: 'total',
  context: {
    user_index: async (params) => {
      // mock api call
      return {
        data: [{ id: 1, name: 'john' }],
        total: 1
      };
    }
  }
});

(async () => {
  const result = await fetcher({ current: 1, pageSize: 10 });
  console.log(result);
})();
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-create-fetcher/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-create-fetcher
[version-url]: https://npmjs.org/package/@jswork/next-create-fetcher

[license-image]: https://img.shields.io/npm/l/@jswork/next-create-fetcher
[license-url]: https://github.com/afeiship/next-create-fetcher/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-create-fetcher
[size-url]: https://github.com/afeiship/next-create-fetcher/blob/master/dist/next-create-fetcher.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-create-fetcher
[download-url]: https://www.npmjs.com/package/@jswork/next-create-fetcher
