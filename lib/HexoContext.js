import { use } from 'react';
import {useLocals} from 'hexo-renderer-jsx/lib/HexoContext';


export default function Header() {
  const {config, theme, url_for} = useLocals();

  return <header id="header" className="inner">
    <div className="alignleft">
      <h1><a href={ config.root }>{ config.title }</a></h1>
      <h2><a href={ config.root }>{ config.subtitle ?? '' }</a></h2>
    </div>
    <nav id="main-nav" className="alignright">
      <ul>
        { Object.entries(theme.menu).map( (k, v) =>
          <li key={k}><a href={ url_for(v) }>{ k }</a></li>
        ) }
      </ul>
      <div className="clearfix"></div>
    </nav>
    <div className="clearfix"></div>
  </header>
}
