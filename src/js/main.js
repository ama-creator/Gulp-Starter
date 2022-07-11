// choose shop 
const selectBtn = document.querySelector('.select-item'),
      selectBtnArrow = document.querySelector('.select-item__icon'),
      selectItems = document.querySelector('.select-items'),
      selectItem = document.querySelectorAll('.select-items__value') ;

selectBtn.addEventListener('click', () => {
  selectItems.classList.toggle('select-items--visible');
  selectBtnArrow.classList.toggle('select-item__icon--active');
});

selectItem.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
  })
})

// mask for a number phone 
document.addEventListener('DOMContentLoaded', function() {
  let phoneInputs = document.querySelectorAll('input[data-tel-input]');

  let getInputNumbersValue = function(input) {
    return input.value.replace(/\D/g, '');
  }

  let onPhoneInput = function(e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        formattedInputValue = '',
        selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return input.value = '';
    }

    // 
    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        // Russian number 
      if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;
      let firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
        // Not Russian number 
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }

  let onPhoneKeyDown = function(e) {
    let input = e.target;
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
      input.value = '';
    }
  }

  let onPhonePaste = function(e) {
    let pasted = e.clipboardData || window.clipboardData,
        input = e.target,
        inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  }

  for (i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeyDown);
    input.addEventListener('paste', onPhonePaste);
  }
});

// set attribute for battons save / edit 
const saveBtn = document.querySelectorAll('.form-btn__text--save');
const editBtn = document.querySelectorAll('.form-btn__text--change');

// event for save button 
saveBtn.forEach(item => {
  item.addEventListener('click', () => {
    if (!item.hasAttribute('disabled', 'disabled')) {
      item.setAttribute('disabled', 'disabled');
      console.log('set atrib');
    } else {
      item.removeAttribute('disabled', 'disabled');
      console.log('removed atrib');
    }
  })
  
})

// event for edit button 
editBtn.forEach(item => {
  item.addEventListener('click', () => {
    if (!item.hasAttribute('disabled', 'disabled')) {
      item.setAttribute('disabled', 'disabled');
    } else {
      item.removeAttribute('disabled', 'disabled');
    }
  })
  
})


// simplebar settings
new SimpleBar(document.getElementById('scroll-ul'), { autoHide: false, scrollbarMinSize: 50,});
new SimpleBar(document.getElementById('body'), { autoHide: false, scrollbarMinSize: 50,});


