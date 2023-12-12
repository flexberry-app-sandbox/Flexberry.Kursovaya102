﻿



CREATE TABLE "ОказКонсульт"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ВремяКонсульт" NUMBER(10) NULL,

	"ПредостУслуга" NVARCHAR2(11) NULL,

	"РасчетОстВрем" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасчетОстВрем"
(

	"primaryKey" RAW(16) NOT NULL,

	"Использовано" NUMBER(10) NULL,

	"Доступно" NUMBER(10) NULL,

	"РасторжДоговора" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"id" NUMBER(10) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"НомерТелефона" NVARCHAR2(255) NULL,

	"НаимОрганицации" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаключДоговора"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Тип" NVARCHAR2(13) NULL,

	"Стоимость" NUMBER(10) NULL,

	"Клиент" RAW(16) NOT NULL,

	"ДирОтдПоРабСКл" RAW(16) NOT NULL,

	"ОказКонсульт" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДирОтдПоРабСКл"
(

	"primaryKey" RAW(16) NOT NULL,

	"id" NVARCHAR2(255) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"НомерТел" NVARCHAR2(255) NULL,

	"СерияПаспорта" NVARCHAR2(255) NULL,

	"НомерПаспорта" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасторжДоговора"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"ДирОтдПоРабСКл" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ОказКонсульт"
	ADD CONSTRAINT "ОказКонсульт__6194" FOREIGN KEY ("РасчетОстВрем") REFERENCES "РасчетОстВрем" ("primaryKey");

CREATE INDEX "ОказКонсульт_I_528" on "ОказКонсульт" ("РасчетОстВрем");

ALTER TABLE "РасчетОстВрем"
	ADD CONSTRAINT "РасчетОстВре_8102" FOREIGN KEY ("РасторжДоговора") REFERENCES "РасторжДоговора" ("primaryKey");

CREATE INDEX "РасчетОстВре_5924" on "РасчетОстВрем" ("РасторжДоговора");

ALTER TABLE "ЗаключДоговора"
	ADD CONSTRAINT "ЗаключДогово_8155" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "ЗаключДогово_5761" on "ЗаключДоговора" ("Клиент");

ALTER TABLE "ЗаключДоговора"
	ADD CONSTRAINT "ЗаключДогово_1519" FOREIGN KEY ("ДирОтдПоРабСКл") REFERENCES "ДирОтдПоРабСКл" ("primaryKey");

CREATE INDEX "ЗаключДогово_4544" on "ЗаключДоговора" ("ДирОтдПоРабСКл");

ALTER TABLE "ЗаключДоговора"
	ADD CONSTRAINT "ЗаключДогово_6558" FOREIGN KEY ("ОказКонсульт") REFERENCES "ОказКонсульт" ("primaryKey");

CREATE INDEX "ЗаключДоговор_272" on "ЗаключДоговора" ("ОказКонсульт");

ALTER TABLE "РасторжДоговора"
	ADD CONSTRAINT "РасторжДогов_7682" FOREIGN KEY ("ДирОтдПоРабСКл") REFERENCES "ДирОтдПоРабСКл" ("primaryKey");

CREATE INDEX "РасторжДогов_1529" on "РасторжДоговора" ("ДирОтдПоРабСКл");

ALTER TABLE "РасторжДоговора"
	ADD CONSTRAINT "РасторжДогов_7125" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "РасторжДогов_3261" on "РасторжДоговора" ("Клиент");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


