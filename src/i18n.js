import i18n, {reloadResources, use} from "i18next";
import {initReactI18next} from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";
import esTranslation from "./locales/es.json";

i18n 
    .use(initReactI18next)
    .init({
        lng:'pt', // Definir linguagem inicial
        fallBacklng: 'pt', // Definir um idioma de fallback
        resources:{
            en:{
                translation: enTranslation,
            },
            pt:{
                translation: ptTranslation,
            },
            es:{
                translation: esTranslation,
            },
            interpolation: {
                escapeValue: false, //Evita a necessidade de escapar essa sequÊncia em traduções
            }
        }
    })

    export default i18n;