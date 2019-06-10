
var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendDinnerSuggestions);
submit.on("click", appendTypeSuggestions);

function appendDinnerSuggestions() {
  var name = $('.name').val();
console.log("AHHHH")
  cardContainer.append(`
    <p class="name-card">${name}</p>
  `);

$('.name').val("");
}
