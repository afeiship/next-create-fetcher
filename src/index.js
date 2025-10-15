import nx from '@jswork/next';

const defaults = {
  page: 'page',
  size: 'size',
  dataPath: 'data',
  totalPath: 'total'
};

nx.createFetcher = function (inResource, inOptions) {
  const options = nx.mix(null, defaults, inOptions);
  const ctx = options.context || nx.$api;
  return async function ({ current, pageSize }) {
    const params = {};
    params[options.page] = current;
    params[options.size] = pageSize;
    const res = await ctx[inResource + '_index'](params);
    const data = options.dataPath ? res[options.dataPath] : res.rows;
    const total = options.totalPath ? res[options.totalPath] : res.total;
    return {
      data: data,
      total: total
    };
  };
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.createFetcher;
}

export default nx.createFetcher;
