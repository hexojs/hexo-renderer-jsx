# JSX Renderer for Hexo

[![Author](https://img.shields.io/badge/Author-Baoshuo-b68469.svg?style=flat-square)](https://baoshuo.ren)
[![Version](https://img.shields.io/github/v/release/renbaoshuo/hexo-renderer-jsx?color=%235755d9&include_prereleases&label=version&style=flat-square)](https://github.com/renbaoshuo/hexo-renderer-jsx/releases)
[![Repo Size](https://img.shields.io/github/repo-size/renbaoshuo/hexo-renderer-jsx?style=flat-square)](https://github.com/renbaoshuo/hexo-renderer-jsx)

## Install

```bash
npm install hexo-renderer-jsx react react-dom --save
# or use yarn:
#   yarn add hexo-renderer-jsx react react-dom
```

## Access Hexo locals

This renderer exposes an `useLocals` hook for theme authors to access Hexo's locals and avoid prop-drilling.

```jsx
const { useLocals } = require('hexo-renderer-jsx/use-locals');

export default function Index(props) {
  const { config, url_for } = useLocals();
  return (
    <a href={url_for('')} >
      {config.title}
    </a>
  );
}
```

## Author

**hexo-renderer-jsx** © [Baoshuo](https://github.com/renbaoshuo), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/hexo-renderer-jsx/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
