
const api = new APIManager()
const render = new Renderer()

const saveUserPage = function (key , value) {
    let userkey = value.mainUser.name.first
    const USERS = JSON.parse( localStorage.getItem(key) || `{}` ) 
    USERS[userkey] = value
    localStorage.setItem(key , JSON.stringify(USERS))
}

const loadUserPage = function (userKey) {
    const USERS = JSON.parse( localStorage.getItem(`users`)  || `{}` ) 
    return USERS[userKey]
}

const getSavedUsersKeys = function () {
    const USERSOBJECT = JSON.parse( localStorage.getItem(`users`) || `{}` )
    return Object.keys(USERSOBJECT)
}

const getSavedUsers = function () {
    api.data.savedUsers = getSavedUsersKeys()
    Renderer.savedUsers(api.data.savedUsers)
}

getSavedUsers()


$(`.buttons`).on(`click`,`#btn_load_data` , function(){
    api.loadData()
})

$(`.buttons`).on(`click`,`#btn_display_user` , function(){
    render.render(api.data)
})

$(`.buttons`).on(`click`, `#btn-save-user-page`, function () {
    saveUserPage(`users` , api.data)
    getSavedUsers()
})

$(`.buttons`).on(`click` , `#btn-load-user-page` , function(){
    let selectedUser = $(`#drop-down-users`).find(`:selected`).attr(`value`)
    render.render(loadUserPage(selectedUser))
})
