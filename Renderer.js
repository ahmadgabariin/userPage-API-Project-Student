
class Renderer {

    constructor () {

    }

    render (data) {     
        this.cleanUserPage()
        this.loadUserInfo(data.mainUser)
        this.loadFavoriteQuote(data.quote)
        this.loadPokemon(data.pokemon)
        this.loadAboutMeText(data)
        this.loadfriendsTemplate(data.friends)
    }

    loadUserInfo (user) {
        const SOURCE = $(`#user-info-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        let userInfoTemplate = TEMPLATE(user)
        $(`.user-container`).append(userInfoTemplate)
    }


    loadFriendsData(users) {
        const SOURCE = $(`#friends-names-list-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        let friendsList = TEMPLATE( {freinds : users} )
        $(`.friends-list`).append(friendsList)
    }

    loadfriendsTemplate(users){
        const SOURCE = $(`#friends-names-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`.friends-container`).append(  TEMPLATE() )
        this.loadFriendsData(users)
    }

    loadFavoriteQuote (quote) {
        const SOURCE = $(`#qoute-content`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`.quote-container`).append(TEMPLATE(quote) )
    }

    loadPokemon (pokemon) {
        Handlebars.registerHelper('loud', function (aString) {
            return aString[0].toUpperCase() + aString.slice(1)
        })
        const SOURCE = $(`#pokemon-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`.content-container`).find(`.pokemon-container`).first().append(TEMPLATE(pokemon))
    }

    loadAboutMeText (meatText) {
        const SOURCE = $(`#meat-text-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`.content-container`).find(`.meat-container`).append(TEMPLATE({meatText: meatText.meatText}))


    }

    static savedUsers (savedUsers) {
        $(`#drop-down-users`).empty()
        const SOURCE = $(`#saved-users-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`#drop-down-users`).append( TEMPLATE({savedUsers : savedUsers}) )
    }

    cleanUserPage () {
        $(`.user-container`).empty()
        $(`.quote-container`).empty()
        $(`.content-container`).find(`.pokemon-container`).first().empty()
        $(`.content-container`).find(`.meat-container`).empty()
        $(`.friends-container`).empty()
    }

    
}