import React from "react"
import "./src/scss/index.scss"
import { IntlProvider } from "react-intl"
import { Layout } from "./src/components/Layout"

const getLanguageFromPath = (path, languages) => {
    if (!path) {
        return languages[0]
    }
    const langPart = path.split('/')[1]
    return languages.includes(langPart) ? langPart : languages[0]
}

export const wrapPageElement = ({ element, props }) => {
    const languageKey = getLanguageFromPath(props.location.pathname, ['en', 'fr'])

    return (
        <IntlProvider locale={languageKey}>
            <Layout>
                {element}
            </Layout>
        </IntlProvider>
    )
}

export const onClientEntry = () => {
    const userLang = navigator.language.substr(0, 2)
    if (window.location.pathname === '/') {
        if (userLang === 'en' || userLang === 'fr') {
            window.location.pathname = '/' + userLang
        } else {
            window.location.pathname = '/'
        }
    }
}