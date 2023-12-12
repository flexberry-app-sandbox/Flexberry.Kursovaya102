import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-kursovaya10-тип-договора'),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-kursovaya10-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya10-клиент', { inverse: null, async: false }),
  оказКонсульт: DS.belongsTo('i-i-s-kursovaya10-оказ-консульт', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya10-заключ-договора.validations.оказКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаключДоговораE', 'i-i-s-kursovaya10-заключ-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya10-дир-отд-по-раб-с-кл', '', {
      фамилия: attr('', { index: 5 }),
      имя: attr('', { index: 6 }),
      отчество: attr('', { index: 7 })
    }, { index: 4 }),
    клиент: belongsTo('i-i-s-kursovaya10-клиент', '', {
      фамилия: attr('', { index: 9 }),
      имя: attr('', { index: 10 }),
      отчество: attr('', { index: 11 })
    }, { index: 8 })
  });

  modelClass.defineProjection('ЗаключДоговораL', 'i-i-s-kursovaya10-заключ-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya10-дир-отд-по-раб-с-кл', '', {
      фамилия: attr('', { index: 4 }),
      имя: attr('', { index: 5 }),
      отчество: attr('', { index: 6 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya10-клиент', '', {
      фамилия: attr('', { index: 8 }),
      имя: attr('', { index: 9 }),
      отчество: attr('', { index: 10 })
    }, { index: 7 })
  });
};
