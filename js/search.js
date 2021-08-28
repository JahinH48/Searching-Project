const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;



    // clare data 
    searchField.value = '';

    if (searchText == '') {
        const ErrorM = document.getElementById('Error')
        const div = document.createElement('div')
        div.classList.add('card-body')
        div.innerHTML = `
        <h5 class="card-title text-center">Error</h5>
        <p class="card-text"> Plese Search Your food</p>
        `;

        ErrorM.appendChild(div)
    }

    else {
        // Load Data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result')
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    /* if (data.length == 0) {
        console.log('jisan')
    } */

    data.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
             <img src="${meal.strMealThumb}" class="card-img-top p-3 rounded" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
      </div>
        `;

        searchResult.appendChild(div)
    })

}

const loadMealDetail = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}



const displayMealDetails = meal => {

    const mealDetails = document.getElementById('meal-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
        `
    mealDetails.appendChild(div)

}
