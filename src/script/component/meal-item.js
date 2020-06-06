class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
       
        .fan-art-meal {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
      
        .meal-info {
            padding: 24px;
        }
        
        .meal-info > h2 {
            font-weight: lighter;
        }
        .meal-info > button{
            margin-top: 30px;
            font-size: 16px;
            font-weight: bold;
            display: inline;
            background-color: rgb(177, 134, 77);
            padding: 7px 16px;
            text-align: center;
            cursor: pointer;
        }

        </style>
            <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <button onclick="orderFunction()">Order</button>
            </div>`;
    }
 }
  
 customElements.define("meal-item", MealItem);