const personGenerator = {
    lastNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорьвич",
            "id_10": "Андреевич"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Ольга",
            "id_4": "Светлана",
            "id_5": "Ева",
            "id_6": "Мария",
            "id_7": "Наталья",
            "id_8": "Екатерина",
            "id_9": "Вера",
            "id_10": "Яна"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    professionMaleJson: `{
        "count": 6,
        "list": {     
            "id_1": "электрик",
            "id_2": "водитель",
            "id_3": "слесарь",
            "id_4": "механик",
            "id_5": "юрист",
            "id_6": "охраник"

         }
    }`,
    professionFemaleJson: `{
        "count": 6,
        "list": {     
            "id_1": "повар",
            "id_2": "экономист",
            "id_3": "медсестра",
            "id_4": "эколог",
            "id_5": "бухгалтер",
            "id_6": "диспетчер"
         }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    AGE:50,
    YEAR:1953,
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    randomFirstNameMale: function () {
        return this.randomValue(this.firstNameMaleJson);
    }, 
    randomMiddleNameMale: function () {
        return this.randomValue(this.middleNameMaleJson);
    },

    randomFirstNameFemale: function () {
        return this.randomValue(this.firstNameFemaleJson);
    },
    randomLastName: function () {
        return this.randomValue(this.lastNameJson);
    },
    randomMonth: function () {
        return this.randomValue(this.monthJson);
    },
    randomProfessionFemale: function () {
        return this.randomValue(this.professionFemaleJson);
    },
    randomProfessionMale: function () {
        return this.randomValue(this.professionMaleJson);
    },
    randomGender: function () {
        let male = this.randomIntNumber(1, 0);
        male == 1 ? this.male = this.GENDER_MALE : this.male = this.GENDER_FEMALE;
        return this.male;
    },
    getPerson: function () {
            this.person = {};
            this.person.gender = this.randomGender();
            this.person.lastName = this.randomLastName();
        if (this.person.gender == this.GENDER_FEMALE) {
            this.person.lastName += 'a';
            this.person.firstName = this.randomFirstNameFemale();
            this.person.profession = this.randomProfessionFemale();
            this.person.middleName = this.randomMiddleNameMale().slice(0, -2) + 'на';      
        }
        else {
            this.person.firstName = this.randomFirstNameMale();
            this.person.profession = this.randomProfessionMale();
            this.person.middleName = this.randomMiddleNameMale();
        }
        let date='';
        let month='';
        month = this.randomMonth();
        if ((month == "апрель") || (month == "июнь") || (month == "сентябрь") || (month == "ноябрь")){
            date = this.randomIntNumber(1,30);
        }
        if (month == "февраль") {
            date = this.randomIntNumber(1,29);
        } else {
            date = this.randomIntNumber(1,31);   
        }
        this.person.year = this.randomIntNumber(0, this.AGE);
        date = String(date)+' '+String(month)+' '+String(this.person.year + this.YEAR);
        this.person.year = date;
        return this.person;
    }
}