/**
 * Mocking client-server processing
 */
const URLS = [
  {
    id: 1, title: 'github', href: 'https://github.com',
  },
  {
    id: 2, title: 'google', href: 'https://google.com',
  },
  {
    id: 3, title: 'vuejs', href: 'https://vuejs.com',
  },
];

const getUrls = (cb: Function) => {
  setTimeout(() => cb(URLS), 100);
};

const addUrl = (url: string, cb: Function, errorCb: Function) => {
  setTimeout(() => {
    if (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) {
      cb();
    } else {
      errorCb();
    }
  }, 100);
};

export default {
  getUrls,
  addUrl,
};
