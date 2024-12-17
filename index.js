let form = document.getElementById("form")
let searchInput = document.getElementById("searchinput")
let APIKEY = "397a100d1d1b433ea627a4479ec3e519"
let APIID = "17ef4a25"
let APIKEY2 = "9d4f0bcfc7b62c121f477ee587a7d65d"

form.addEventListener("submit", function(event){
    event.preventDefault()
    let recipe = searchInput.value
    getRecipe(recipe)
    form.reset()
})


function getRecipe(recipe){
    let recipeRequest = new XMLHttpRequest()
    recipeRequest.open("GET", `https://api.edamam.com/search?q=${recipe}&app_id=${APIID}&app_key=${APIKEY2}`)

    recipeRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText)
            getData(data)
            console.log(data)
        }
    }

    recipeRequest.send()

}

function getData(data){

    let foodLabel = data.hits[0].recipe.label
    let dishType = data.hits[0].recipe.dishType[0]
    let mealType = data.hits[0].recipe.mealType[0]
    let ingredient = data.hits[0].recipe.ingredientLines.forEach(function(item){
        let recipeList = item
        console.log(recipeList)
    })
}


