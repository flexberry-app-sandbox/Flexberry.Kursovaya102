import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya10.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya10.title'),
          children: [{
            link: 'i-i-s-kursovaya10-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-расчет-ост-врем-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya10-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-клиент-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kursovaya10-заключ-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-заключ-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-заключ-договора-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kursovaya10-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-дир-отд-по-раб-с-кл-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya10-расторж-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-расторж-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya10.i-i-s-kursovaya10-расторж-договора-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})