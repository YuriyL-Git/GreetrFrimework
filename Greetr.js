//const jQuery = require('./jquery-3.5.1');
//import $ from './jquery-3.5.1'

(function (global, $) {

    let Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }
    let supportedLang = ['en', 'es', 'ru']

    let greetings = {
        en: 'Hello',
        es: 'Hola',
        ru: 'Привет'
    }

    let formalGreeetings = {
        en: 'Greetings',
        es: 'Saludos',
        ru: 'Здравствуйте'
    }

    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
        ru: 'Залогинено'
    }


    Greetr.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },

        validate: function () {
            if (!supportedLang.includes(this.language)) throw 'Invalid language'
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },
        formalGreeetings: function () {
            return formalGreeetings[this.language] + ', ' + this.fullName()
        },

        greet: function (formal) {
            let msg
            if (formal) {
                msg = this.formalGreeetings()
            } else {
                msg = this.greeting()
            }
            if (console) {
                console.log(msg)
            }
            //'this' refers to the calling object at execution time
            // makes the method chainable
            return this
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ', ' + this.fullName())
            }
            return this
        },
        setLang: function (lang) {
            this.language = lang
            this.validate()
            return this
        }
    }

    Greetr.init = function (firstName, lastName, language) {
        let self = this
        self.firstName = firstName || ''
        self.lastName = lastName || ''
        self.language = language || 'en'

    }
    Greetr.init.prototype = Greetr.prototype

    //create aliases to Greetr in global object
    global.Greetr = global.G$ = Greetr


}(window, $))


