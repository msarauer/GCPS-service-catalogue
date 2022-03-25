import React from 'react'
import { useIntl } from 'react-intl';
import { globalHistory } from "@reach/router"
import { getLangs, getUrlForLang } from 'ptz-i18n';
import Link from 'gatsby-link';



const LanguageSelect = () => {
  const intl = useIntl()
  const url = globalHistory.location.pathname;
  const langKey = intl.locale;
  const langs  = ['en', 'fr']
  const homeLink = `/${langKey}/`

  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))


  let locale = `${intl.locale}-ca`;

  const links = langsMenu
  .filter(lang => !lang.selected)
  .map((lang, idx) => {
    return (
      <React.Fragment key={idx}>
        <Link to={lang.link} className="language-link" lang={lang.langKey}>
          <span className="d-none d-sm-block">English/Francais</span>
          <abbr title="English/Francais" className="d-sm-none language-link mrgn-tp-sm mrgn-bttm-0 text-uppercase">{lang.langKey}</abbr>
        </Link>
      </React.Fragment>
  )});

    return (
        <div>
            {links}
        </div>
    )
}

export default LanguageSelect
