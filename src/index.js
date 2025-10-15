import nx from '@jswork/next';

const defaults = {
  page: 'page',
  size: 'size',
  dataPath: 'rows',
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
    const data = nx.get(res, options.dataPath);
    const total = nx.get(res, options.totalPath);
    
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
