﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya10
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оказание консультаций.
    /// </summary>
    // *** Start programmer edit section *** (ОказКонсульт CustomAttributes)

    // *** End programmer edit section *** (ОказКонсульт CustomAttributes)
    [AutoAltered()]
    [Caption("Оказание консультаций")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОказКонсультE", new string[] {
            "Дата as \'Дата\'",
            "ВремяКонсульт as \'Время консульт\'",
            "ПредостУслуга as \'Предост услуга\'",
            "РасчетОстВрем.Доступно",
            "РасчетОстВрем.Использовано"})]
    public class ОказКонсульт : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fВремяКонсульт;
        
        private IIS.Kursovaya10.Услуга fПредостУслуга;
        
        private IIS.Kursovaya10.РасчетОстВрем fРасчетОстВрем;
        
        // *** Start programmer edit section *** (ОказКонсульт CustomMembers)

        // *** End programmer edit section *** (ОказКонсульт CustomMembers)

        
        /// <summary>
        /// ВремяКонсульт.
        /// </summary>
        // *** Start programmer edit section *** (ОказКонсульт.ВремяКонсульт CustomAttributes)

        // *** End programmer edit section *** (ОказКонсульт.ВремяКонсульт CustomAttributes)
        public virtual int ВремяКонсульт
        {
            get
            {
                // *** Start programmer edit section *** (ОказКонсульт.ВремяКонсульт Get start)

                // *** End programmer edit section *** (ОказКонсульт.ВремяКонсульт Get start)
                int result = this.fВремяКонсульт;
                // *** Start programmer edit section *** (ОказКонсульт.ВремяКонсульт Get end)

                // *** End programmer edit section *** (ОказКонсульт.ВремяКонсульт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказКонсульт.ВремяКонсульт Set start)

                // *** End programmer edit section *** (ОказКонсульт.ВремяКонсульт Set start)
                this.fВремяКонсульт = value;
                // *** Start programmer edit section *** (ОказКонсульт.ВремяКонсульт Set end)

                // *** End programmer edit section *** (ОказКонсульт.ВремяКонсульт Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ОказКонсульт.Дата CustomAttributes)

        // *** End programmer edit section *** (ОказКонсульт.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ОказКонсульт.Дата Get start)

                // *** End programmer edit section *** (ОказКонсульт.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ОказКонсульт.Дата Get end)

                // *** End programmer edit section *** (ОказКонсульт.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказКонсульт.Дата Set start)

                // *** End programmer edit section *** (ОказКонсульт.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ОказКонсульт.Дата Set end)

                // *** End programmer edit section *** (ОказКонсульт.Дата Set end)
            }
        }
        
        /// <summary>
        /// ПредостУслуга.
        /// </summary>
        // *** Start programmer edit section *** (ОказКонсульт.ПредостУслуга CustomAttributes)

        // *** End programmer edit section *** (ОказКонсульт.ПредостУслуга CustomAttributes)
        public virtual IIS.Kursovaya10.Услуга ПредостУслуга
        {
            get
            {
                // *** Start programmer edit section *** (ОказКонсульт.ПредостУслуга Get start)

                // *** End programmer edit section *** (ОказКонсульт.ПредостУслуга Get start)
                IIS.Kursovaya10.Услуга result = this.fПредостУслуга;
                // *** Start programmer edit section *** (ОказКонсульт.ПредостУслуга Get end)

                // *** End programmer edit section *** (ОказКонсульт.ПредостУслуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказКонсульт.ПредостУслуга Set start)

                // *** End programmer edit section *** (ОказКонсульт.ПредостУслуга Set start)
                this.fПредостУслуга = value;
                // *** Start programmer edit section *** (ОказКонсульт.ПредостУслуга Set end)

                // *** End programmer edit section *** (ОказКонсульт.ПредостУслуга Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya10.РасчетОстВрем.
        /// </summary>
        // *** Start programmer edit section *** (ОказКонсульт.РасчетОстВрем CustomAttributes)

        // *** End programmer edit section *** (ОказКонсульт.РасчетОстВрем CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РасчетОстВрем"})]
        public virtual IIS.Kursovaya10.РасчетОстВрем РасчетОстВрем
        {
            get
            {
                // *** Start programmer edit section *** (ОказКонсульт.РасчетОстВрем Get start)

                // *** End programmer edit section *** (ОказКонсульт.РасчетОстВрем Get start)
                IIS.Kursovaya10.РасчетОстВрем result = this.fРасчетОстВрем;
                // *** Start programmer edit section *** (ОказКонсульт.РасчетОстВрем Get end)

                // *** End programmer edit section *** (ОказКонсульт.РасчетОстВрем Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказКонсульт.РасчетОстВрем Set start)

                // *** End programmer edit section *** (ОказКонсульт.РасчетОстВрем Set start)
                this.fРасчетОстВрем = value;
                // *** Start programmer edit section *** (ОказКонсульт.РасчетОстВрем Set end)

                // *** End programmer edit section *** (ОказКонсульт.РасчетОстВрем Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОказКонсультE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОказКонсультE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОказКонсультE", typeof(IIS.Kursovaya10.ОказКонсульт));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ОказКонсульт.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfОказКонсульт CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfОказКонсульт CustomAttributes)
    public class DetailArrayOfОказКонсульт : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya10.DetailArrayOfОказКонсульт members)

        // *** End programmer edit section *** (IIS.Kursovaya10.DetailArrayOfОказКонсульт members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ОказКонсульт by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ОказКонсульт.
        /// </summary>
        public DetailArrayOfОказКонсульт(IIS.Kursovaya10.РасчетОстВрем fРасчетОстВрем) : 
                base(typeof(ОказКонсульт), ((ICSSoft.STORMNET.DataObject)(fРасчетОстВрем)))
        {
        }
        
        public IIS.Kursovaya10.ОказКонсульт this[int index]
        {
            get
            {
                return ((IIS.Kursovaya10.ОказКонсульт)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya10.ОказКонсульт dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
