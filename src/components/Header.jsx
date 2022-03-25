import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import GOClogoEn from "../images/sig-blk-en.svg";
import GOClogoFr from "../images/sig-blk-fr.svg";
import { useIntl } from 'react-intl';
import LanguageSelect from './LanguageSelect';


const Header = () => {
  const intl = useIntl();
  let locale = `${intl.locale}-ca`;
  let homeLink = `/${intl.locale}/`;

    return (
        <header className="mb-0">
        <div className="container">
          <div className="row my-3 mx-2">
            <nav className="skiphold" id="header-skiplink">
              <a className="sr-only sr-only-focusable aurora-skip skiplink" aria-label="main skiplink" href="#main-content">Skip to the main content</a>
            </nav>
              <div className="align-self-center" property="publisher" typeof="GovernmentOrganization">
              <div
                  className="align-self-center"
                  property="publisher"
                  typeof="GovernmentOrganization"
                >
                  <img
                    src={homeLink === "/fr/" ? GOClogoFr : GOClogoEn}
                    className="goc-logo"
                    alt={homeLink === "/fr/" ? 'Public Services and Procurement Canada Logo FR' : 'Public Services and Procurement Canada Logo'}
                  />
                </div>
              </div>
            <section className='text-right align-self-center ml-auto'>
              <h2 className="sr-only sr-only-focusable aurora-skip">Language Selection</h2>
              <LanguageSelect/>
            </section>
          </div>
        </div>
        <Breadcrumbs/>
        <div className="py-4 header-background mb-3">
          <div className="container">
            <div className="row">
                <div className="col-sm-12">
                  <h1 className="text-light">Title Goes Here</h1>
                </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
