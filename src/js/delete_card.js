// export function onCardClickDelete(event) {
// Обязательно приводим к toLowerCase() так как в разных браузерах теги могут быть написаны в разных регистрах -> button или BUTTON
// Получаю true/false - нажата кнопка или нет
// console.log(event.target);
// const isButtonClicked = event.target.className === 'card-button-delete';
// console.log(isButtonClicked);
// if (isButtonClicked) {
//   const cardForDelete = event.target.closest('.card');
//   deleteCard(cardForDelete);
// }
// }

export async function deleteCard(card, token) {
  const id = card.dataset.id;
  console.log(id);
  const response = await fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 200) card.remove();
}
