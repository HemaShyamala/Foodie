async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
  }
}

function searchData(food, parent) {
  parent.innerHTML = null;
  let {
    strMeal,
    strArea,
    strCategory,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strInstructions,
    strMealThumb,
    strTags,
  } = food;

  console.log(
    strMeal,
    strArea,
    strCategory,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strInstructions,
    strMealThumb,
    strTags
  );

  let container = document.createElement("div");
  let instruction_div = document.createElement("div");

  let name = document.createElement("h1");

  name.innerHTML = strMeal;

  let image = document.createElement("img");
  image.src = strMealThumb;

  let category = document.createElement("h3");

  category.innerHTML = `Category:  ${strCategory}`;

  let area = document.createElement("p");
  area.innerHTML = `Cuisine: ${strArea}`;

  let tag = document.createElement("div");
  tag.textContent = "Tags";
  tag.innerHTML = `Dish Type: ${strTags}`;

  let ingredient_div = document.createElement("div");
  ingredient_div.innerHTML = `<h3 style="font-size=large">Ingredients</h3>`;

  ingredient_div.setAttribute("id", "ingredients");

  let ing1 = document.createElement("div");
  ing1.innerHTML = `${strIngredient1}`;

  let ing2 = document.createElement("div");
  ing2.innerHTML = strIngredient2;

  let ing3 = document.createElement("div");
  ing3.innerHTML = strIngredient3;

  let ing4 = document.createElement("div");
  ing4.innerHTML = strIngredient4;

  let ing5 = document.createElement("div");
  ing5.innerHTML = strIngredient5;

  let ing6 = document.createElement("div");
  ing6.innerHTML = strIngredient6;

  ingredient_div.append(ing1, ing2, ing3, ing4, ing5, ing6);

  let instruction = document.createElement("p");

  instruction.innerHTML = `<h1>Instructions</h1> <br/> ${strInstructions}`;
  container.append(name, image, category, area, tag, ingredient_div);
  instruction_div.append(instruction);
  parent.append(container, instruction);
}

function appendData(food, parent) {
  let { meals } = food;

  let {
    0: {
      strMeal,
      strArea,
      strCategory,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strInstructions,
      strMealThumb,
      strTags,
    },
  } = meals;

  //   console.log(
  //     strMeal,
  //     strArea,
  //     strCategory,
  //     strIngredient1,
  //     strIngredient2,
  //     strIngredient3,
  //     strIngredient4,
  //     strIngredient5,
  //     strIngredient6,
  //     strInstructions,
  //     strMealThumb,
  //     strTags,
  //     strYoutube
  //   );

  let container = document.createElement("div");
  let name = document.createElement("h1");

  name.innerHTML = strMeal;

  let image = document.createElement("img");
  image.src = strMealThumb;

  let category = document.createElement("h3");

  category.innerHTML = `Category:  ${strCategory}`;

  let area = document.createElement("p");
  area.innerHTML = `Cuisine: ${strArea}`;

  let tag = document.createElement("div");
  tag.textContent = "Tags";
  tag.innerHTML = `Dish Type: ${strTags}`;

  let ingredient_div = document.createElement("div");
  ingredient_div.innerHTML = `<h3 style="font-size=large">Ingredients</h3>`;

  ingredient_div.setAttribute("id", "ingredients");

  let ing1 = document.createElement("div");
  ing1.innerHTML = `${strIngredient1}`;

  let ing2 = document.createElement("div");
  ing2.innerHTML = strIngredient2;

  let ing3 = document.createElement("div");
  ing3.innerHTML = strIngredient3;

  let ing4 = document.createElement("div");
  ing4.innerHTML = strIngredient4;

  let ing5 = document.createElement("div");
  ing5.innerHTML = strIngredient5;

  let ing6 = document.createElement("div");
  ing6.innerHTML = strIngredient6;

  ingredient_div.append(ing1, ing2, ing3, ing4, ing5, ing6);

  let instruction = document.createElement("p");

  instruction.innerHTML = `<h1>Instructions</h1> <br/> ${strInstructions}`;
  container.append(
    name,
    image,
    category,
    area,
    tag,
    ingredient_div,
    instruction
  );
  parent.append(container);
}

export { getData, appendData, searchData };
