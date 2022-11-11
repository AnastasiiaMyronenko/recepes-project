let allRecipe = document.querySelector("#all-recipe");
let allRecipeHTML = "";
let num = ["first", "second", "third", "forth", "fifth", "sixth"];
for (let i = 1; i <= 6; i++) {
  allRecipeHTML =
    allRecipeHTML +
    `<div class="recipe-page_content_card" id = "${num[i - 1]}-card">
          <img src="/photo/dish${i}.png" alt="dish${i}" id = "${num[i - 1]}" />
          <h2>Wet Vegetable Spring Rolls</h2>
          <div class="recipe-page_content_card_container">
            <div class="recipe-page_content_card_ingredient">
              <h3 class="dashed-border">Ingredient</h3>
              <ul>
                <li class="dashed-border">350g spaghetti or linguine</li>
                <li class="dashed-border">
                  140g pack diced pancetta, or smoked<br />streaky bacon
                </li>
                <li class="dashed-border">2 stp olive oil</li>
                <li class="dashed-border">1 garlic clove, crushed</li>
                <li class="dashed-border">1 egg, plus 4 yolks</li>
                <li class="dashed-border">50g parmesan, grated</li>
              </ul>
            </div>
            <div class="recipe-page_content_card_method">
              <h3 class="dashed-border">Method</h3>

              <div class="recipe-page_content_card_method_steps">
                <h4>Step 1</h4>
                <p>
                  Nisl faucibus quis urna nibh ut amet diam<br />suscipit
                  pretium massa sollicitudin in risus in<br />sagittis nisl
                  faucibus quis urna nibh ut.
                </p>
              </div>
              <div class="recipe-page_content_card_method_steps">
                <h4>Step 2</h4>
                <p>
                  Nisl faucibus quis urna nibh ut amet diam<br />suscipit
                  pretium massa sollicitudin in risus in<br />sagittis nisl
                  faucibus quis urna nibh ut massa<br />sollicitudin in risus
                </p>
              </div>
            </div>
          </div>
        </div>`;
}
allRecipe.innerHTML = allRecipeHTML;
