const jQuery = require('./jquery-3.5.1');


(function (global, $) {

    let Greetr = function (firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language)
    }

    Greetr.prototype = {}

    Greetr.init = function (firstName, lastName, language){
        let self = this
        self.firstName = firstName || ''
        self.lastName = lastName || ''
        self.language = language || 'en'

    }
    Greetr.init.prototype = Greetr.prototype

    //create aliases to Greetr in globl object
    global.Greetr = global.G$  = Greetr



}(window, jQuery))
