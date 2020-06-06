import '../component/search-bar.js';
import '../component/meal-list.js';
import '../data/custom.js';
import DataSource from '../data/data-source.js';
import Logo from "../../image/resto.jpg";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const menuListElement = document.querySelector("meal-list");
    
    //Fungsi Get API List Meal Categories
    const getCategory = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllCategories(responseJson.categories);
            }
         })
         .catch(error => {
             showResponseMessage(error);
         })
        };

        //Hasil Get API List Meal Categories
        const renderAllCategories = (categories) => {
            const listCategoryElement = document.querySelector("#listCategory");
            listCategoryElement.innerHTML = "";
    
            categories.forEach(category => {
                listCategoryElement.innerHTML += `
                <div class="listCat">
                <img class="fan-art-category" src="${category.strCategoryThumb}" alt="Fan Art">
                <div class="category-info">
                    <h2>${category.strCategory}</h2>
                    <p>${category.strCategoryDescription}</p>
                </div>
                </div>`;
            });
        };

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
  
    const renderResult = results => {
        menuListElement.meals = results;
    };
  
   const fallbackResult = message => {
    menuListElement.renderError(message);
    };
  
    searchElement.clickEvent = onButtonSearchClicked;

    document.addEventListener("DOMContentLoaded", () => {
        getCategory();
    });
    document.querySelector('#restaurant').src = Logo;
    
 };
 export default main;