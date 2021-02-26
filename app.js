let john = G$('John', 'Doe', 'en')
$('#login').click(
    function () {
        let user = G$('John', 'Doe')

        user.setLang($('#lang').val())
            .HTMLGreeting('#greeting', true).log()
    }
)