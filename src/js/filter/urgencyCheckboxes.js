const urgency = ['normal', 'priority', 'emergency'];
const urgencyContainer = document.querySelector('#urgencyCheckboxes');

const urgencyCheckboxes = urgency.map((urgencyItem) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'urgency-wrapper';
  wrapper.innerHTML = `
                <input class="form-urgency" type="checkbox" value="${urgencyItem}" id="${urgencyItem}">
                <label class="form-urgency-label" for="${urgencyItem}">
                    ${urgencyItem}
                </label>`;
  urgencyContainer.appendChild(wrapper);
  return wrapper.querySelector('input');
});

export default urgencyCheckboxes;
