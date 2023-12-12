import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-kursovaya10-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya10-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya10-расторж-договора.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya10-расторж-договора.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-kursovaya10-расторж-договора.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya10-расторж-договора.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасторжДоговораE', 'i-i-s-kursovaya10-расторж-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya10-дир-отд-по-раб-с-кл', 'Дир отд по раб с кл', {
      id: attr('Id', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'id' }),
    клиент: belongsTo('i-i-s-kursovaya10-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('РасторжДоговораL', 'i-i-s-kursovaya10-расторж-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya10-дир-отд-по-раб-с-кл', 'Id', {
      id: attr('Id', { index: 2 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya10-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
