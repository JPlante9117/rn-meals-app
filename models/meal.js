class Meal {
    constructor(id, categoryIds, title, afforability, complexity, imageUrl, duration, ingredients, instructions, isGlutenFree, isVegan, isVegetarian, isLactoseFree){
        this.id = id
        this.categoryIds = categoryIds
        this.title = title
        this.afforability = afforability
        this.complexity = complexity
        this.imageUrl = imageUrl
        this.duration = duration
        this.ingredients = ingredients
        this.instructions = instructions
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.isLactoseFree = isLactoseFree
    }
}

export default Meal