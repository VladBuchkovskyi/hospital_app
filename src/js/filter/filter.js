import urgencyCheckboxes from '@js/filter/urgencyCheckboxes.js';
import { getItems } from '@js/filter/getItems.js';
import { renderCards } from '@js/render_cards.js';

export default function filterCards(token) {
  const searchField = document.querySelector('#search');
  const stateCheckbox = document.querySelector('#state');
  // Filters;
  let searchInput = '';
  const urgencyChecked = new Set();

  searchField.addEventListener('keyup', updateSearchInput);

  urgencyCheckboxes.forEach((c) => {
    c.addEventListener('change', updateUrgencyState);
  });

  function updateUrgencyState(e) {
    const { checked, value } = e.target;
    if (checked) {
      urgencyChecked.add(value);
    } else {
      urgencyChecked.delete(value);
    }
    filter();
  }

  function updateSearchInput(e) {
    searchInput = e.target.value.toLowerCase();
    filter();
  }

  async function filter() {
    // console.log(searchInput)
    let items = await getItems(token);
    let allItems = items;
    const filtered = allItems.filter((item) => {
      if (
        searchInput.length > 2 &&
        !item.content.name.toLowerCase().includes(searchInput) &&
        !item.content.doctor_choice.toLowerCase().includes(searchInput)
      ) {
        return false;
      }
      if (
        urgencyChecked.size > 0 &&
        !urgencyChecked.has(item.content.urgency)
      ) {
        return false;
      }
      return true;
    });
    renderCards(filtered);
  }
}
