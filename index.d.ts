interface FetcherOptions {
  page?: string;
  size?: string;
  dataPath?: string;
  totalPath?: string;
  context?: any;
}

interface FetcherParams {
  current: number;
  pageSize: number;
}

interface FetcherResult<T = any> {
  data: T[];
  total: number;
}

type FetcherFunction<T = any> = (params: FetcherParams) => Promise<FetcherResult<T>>;

interface NxStatic {
  createFetcher: <T = any>(inResource: string, inOptions?: FetcherOptions) => FetcherFunction<T>;
  $api: Record<string, any>;
}