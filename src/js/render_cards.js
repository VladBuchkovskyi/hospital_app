const cardsRow = document.querySelector('.visit-cards-row');

export function renderCards(allItems) {
  cardsRow.innerHTML = '';
  allItems.forEach((item) => renderCard(item));
}

export function renderCard(item) {
  const visitCard = document.createElement('div');
  visitCard.classList.add('card');
  visitCard.dataset.id = item.id;
  const priority = item.content.urgency;
  visitCard.innerHTML = `
        <p class = 'card-urgency ${priority}-color'>${item.content.urgency}</p>
        <div class = 'card-body'>
          <h5 class = 'card-title'>${item.content.name}</h5>
          <h6 class = 'card-subtitle'>${item.content.doctor_choice}</h6>
          <div class = 'card-buttons'>
            <button type='button' class='card-button-show'> Show More </button>
            <button type='button' class='card-button-delete'> Delete Card </button>
          </div>
        </div>
    `;
  cardsRow.appendChild(visitCard);
}
