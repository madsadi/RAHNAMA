import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import fa from './fa.js';
var moment = require('moment-jalaali')
const f=require('moment/locale/fa')
moment.locale("fa", f);

i18n
    // .use(LanguageDetector)
    .init({
        lng: 'fa', // 'en' | 'es'
        resources: {
            fa: {
                translations: fa
            }
        },
        fallbackLng: 'fa',
        debug: false,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        // keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
            format: function(value, format, lng) {
                if (format === 'jalali')  return moment(value).format('jYYYY/jMM/jDD');
                if (format === 'rial')  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ `  ریال  `
                if (format === 'number')  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return value;
            }
        },

        react: {
            wait: true
        }
    });

export default i18n;
export const t = (key, opt) => i18n.t(key, opt)