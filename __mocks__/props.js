const props = {
  match: {
    path: '/articles/:source/:sort',
    url: '/articles/metro/top,latest',
    isExact: true,
    params: {
      source: 'metro',
      sort: 'top,latest',
    },
  },
  location: {
    pathname: '/articles/metro/top,latest',
    search: '',
    hash: '',
  },
  history: {
    length: 50,
    action: 'POP',
    location: {
      pathname: '/articles/metro/top,latest',
      search: '',
      hash: '',
    },
  },
};

export default props;
