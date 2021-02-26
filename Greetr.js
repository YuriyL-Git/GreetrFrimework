(function (global, $) {

    //--------setting up local variables----------------------------

    let supportedLang = ['en', 'es', 'ru']

    //informal greentings
    let greetings = {
        en: 'Hello',
        es: 'Hola',
        ru: 'Привет'
    }

    //formal greetings
    let formalGreeetings = {
        en: 'Greetings',
        es: 'Saludos',
        ru: 'Здравствуйте'
    }

    //logger messages
    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
        ru: 'Залогинено'
    }
    //-----------------------------------------------------------

    //allows to create new object without calling 'new' keyword
    let Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    //the actual object is created here
    Greetr.init = function (firstName, lastName, language) {
        //better to reassign this to self and access properties through self
        //to avoid mistakes
        let self = this
        self.firstName = firstName || ''
        self.lastName = lastName || ''
        self.language = language || 'en'
        self.validate()
    }


    //assigning properties to the created object
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
        //allows to change language of created object after creation
        setLang: function (lang) {
            this.language = lang
            this.validate()
            return this
        },

        //include support for jQuery
        HTMLGreeting: function (selector, formal) {
            if (!$) throw 'jQuery not loaded'
            if (!selector) throw 'missing jQuery selector'

            let msg
            if (formal) msg = this.formalGreeetings()
            if (!formal) msg = this.greeting()
            $(selector).html(msg)
            return this
        }
    }

    //reassigning prototype reference to be able to access prototype properties of
    //the function that really created the object
    Greetr.init.prototype = Greetr.prototype


    //create aliases to Greetr in global object
    global.Greetr = global.G$ = Greetr

}(window, jQuery))


