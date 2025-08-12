// Static list of recipes for demonstration
const recipes = [
    {
        name: 'Chocolate Cake',
        image: 'https://via.placeholder.com/300',
        description: 'Delicious homemade chocolate cake.'
    },
    {
        name: 'Spaghetti Carbonara',
        image: 'https://via.placeholder.com/300',
        description: 'Classic Italian pasta dish.'
    },
    {
        name: 'Caesar Salad',
        image: 'https://via.placeholder.com/300',
        description: 'Fresh Caesar Salad with homemade dressing.'
    }
];

// Display recipes
function displayRecipes(filteredRecipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous list
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
        `;
        recipeList.appendChild(card);
    });
}

// Search function
function searchRecipe() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchQuery) || 
        recipe.description.toLowerCase().includes(searchQuery)
    );
    displayRecipes(filteredRecipes);
}

// Initially display all recipes
displayRecipes(recipes);
