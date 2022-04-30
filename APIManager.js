//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData () {
        this.getrandomUsers()
        this.getrandomQuotes()
        this.getRandomPokemon()
        this.getRandomText()
    }



    errorFunction (xhr , text , error) {
        alert(text)
    }


    getrandomUsers () {
        const errorFunction = this.errorFunction
        let apiLnik = "https://randomuser.me/api/?results=7"

        const mainUserInitialize  = (data) => {
            this.data.mainUser = data.results[0]
            this.data.friends = data.results.slice(1)
        }

        $.ajax({
            dataType  : "json" ,
            url : apiLnik ,
            success : mainUserInitialize  ,
            error : errorFunction
        })
    }




    getrandomQuotes () {

        const errorFunction = this.errorFunction
        const APIURL = "https://api.kanye.rest/"

        const getQuote = (data) => {
            this.data.quote = {
                quote : data.quote ,
                author : "Kanye West"
            }

        }
        
        $.ajax({
            dataType :"json" ,
            url : APIURL ,
            success : getQuote ,
            error : errorFunction
        })

    }


    getRandomPokemon () {
        let randomNumber = Math.floor(Math.random() * 898) + 1
        const errorFunction = this.errorFunction
        const APIURL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
        $.ajax({
            dataType : "json" ,
            url : APIURL ,
            success : function (data) {
                this.data.pokemon = {
                    id : data.id ,
                    name : data.name ,
                    imgsURL : data.sprites.front_default
                }
            }.bind(this),
            error : errorFunction
        })
    }

    getRandomText () {
        const errorFunction = this.errorFunction
        const paragraphsNumber = 1
        const URL = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphsNumber}`

        $.ajax({
            dataType : "json",
            url : URL ,
            success : function (data) {
                this.data.meatText = data.join()
            }.bind(this),
            error :errorFunction
        })

    }

  
}
