const prevBtn = document.querySelector('#prev-preset')
const nextBtn = document.querySelector('#next-preset')

const typeDropdown = document.querySelector('#osc-type')

prevBtn.addEventListener('click', () => {
  if (typeDropdown.selectedIndex > 0) {
    typeDropdown.selectedIndex--
  } else {
    typeDropdown.selectedIndex = typeDropdown.options.length - 1
  }

  oscType = typeDropdown.value
})

nextBtn.addEventListener('click', () => {
  if (typeDropdown.selectedIndex < typeDropdown.options.length - 1) {
    typeDropdown.selectedIndex++
  } else {
    typeDropdown.selectedIndex = 0
  }

  oscType = typeDropdown.value
})
