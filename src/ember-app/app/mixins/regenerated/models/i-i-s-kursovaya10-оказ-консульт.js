import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  предостУслуга: DS.attr('i-i-s-kursovaya10-услуга'),
  расчетОстВрем: DS.belongsTo('i-i-s-kursovaya10-расчет-ост-врем', { inverse: 'оказКонсульт', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya10-оказ-консульт.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya10-оказ-консульт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  предостУслуга: {
    descriptionKey: 'models.i-i-s-kursovaya10-оказ-консульт.validations.предостУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-kursovaya10-оказ-консульт.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказКонсультE', 'i-i-s-kursovaya10-оказ-консульт', {
    дата: attr('Дата', { index: 0 }),
    времяКонсульт: attr('Время консульт', { index: 1 }),
    предостУслуга: attr('Предост услуга', { index: 2 }),
    расчетОстВрем: belongsTo('i-i-s-kursovaya10-расчет-ост-врем', '', {
      доступно: attr('', { index: 3 }),
      использовано: attr('', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
