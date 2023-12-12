import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya10ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya10-дир-отд-по-раб-с-кл-l';
import IISKursovaya10ЗаключДоговораLForm from './forms/i-i-s-kursovaya10-заключ-договора-l';
import IISKursovaya10КлиентLForm from './forms/i-i-s-kursovaya10-клиент-l';
import IISKursovaya10РасторжДоговораLForm from './forms/i-i-s-kursovaya10-расторж-договора-l';
import IISKursovaya10РасчетОстВремLForm from './forms/i-i-s-kursovaya10-расчет-ост-врем-l';
import IISKursovaya10ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya10-дир-отд-по-раб-с-кл-e';
import IISKursovaya10ЗаключДоговораEForm from './forms/i-i-s-kursovaya10-заключ-договора-e';
import IISKursovaya10КлиентEForm from './forms/i-i-s-kursovaya10-клиент-e';
import IISKursovaya10РасторжДоговораEForm from './forms/i-i-s-kursovaya10-расторж-договора-e';
import IISKursovaya10РасчетОстВремEForm from './forms/i-i-s-kursovaya10-расчет-ост-врем-e';
import IISKursovaya10ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya10-дир-отд-по-раб-с-кл';
import IISKursovaya10ЗаключДоговораModel from './models/i-i-s-kursovaya10-заключ-договора';
import IISKursovaya10КлиентModel from './models/i-i-s-kursovaya10-клиент';
import IISKursovaya10ОказКонсультModel from './models/i-i-s-kursovaya10-оказ-консульт';
import IISKursovaya10РасторжДоговораModel from './models/i-i-s-kursovaya10-расторж-договора';
import IISKursovaya10РасчетОстВремModel from './models/i-i-s-kursovaya10-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya10-дир-отд-по-раб-с-кл': IISKursovaya10ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya10-заключ-договора': IISKursovaya10ЗаключДоговораModel,
    'i-i-s-kursovaya10-клиент': IISKursovaya10КлиентModel,
    'i-i-s-kursovaya10-оказ-консульт': IISKursovaya10ОказКонсультModel,
    'i-i-s-kursovaya10-расторж-договора': IISKursovaya10РасторжДоговораModel,
    'i-i-s-kursovaya10-расчет-ост-врем': IISKursovaya10РасчетОстВремModel
  },

  'application-name': 'Kursovaya10',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya10',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya10',
          title: 'Kursovaya10'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya10: {
          caption: 'Kursovaya10',
          title: 'Kursovaya10',
          'i-i-s-kursovaya10-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya10-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya10-заключ-договора-l': {
            caption: 'Заключ договора',
            title: ''
          },
          'i-i-s-kursovaya10-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya10-расторж-договора-l': {
            caption: 'Расторж договора',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya10-дир-отд-по-раб-с-кл-l': IISKursovaya10ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya10-заключ-договора-l': IISKursovaya10ЗаключДоговораLForm,
    'i-i-s-kursovaya10-клиент-l': IISKursovaya10КлиентLForm,
    'i-i-s-kursovaya10-расторж-договора-l': IISKursovaya10РасторжДоговораLForm,
    'i-i-s-kursovaya10-расчет-ост-врем-l': IISKursovaya10РасчетОстВремLForm,
    'i-i-s-kursovaya10-дир-отд-по-раб-с-кл-e': IISKursovaya10ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya10-заключ-договора-e': IISKursovaya10ЗаключДоговораEForm,
    'i-i-s-kursovaya10-клиент-e': IISKursovaya10КлиентEForm,
    'i-i-s-kursovaya10-расторж-договора-e': IISKursovaya10РасторжДоговораEForm,
    'i-i-s-kursovaya10-расчет-ост-врем-e': IISKursovaya10РасчетОстВремEForm
  },

});

export default translations;
