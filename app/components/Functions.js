// Helper functions to manipulate DOM, format numbers and debounce
export const
  select    = el  => document.querySelector(el),
  selectAll = els => document.querySelectorAll(els),
  getId     = id  => document.getElementById(id),
  getHeight = el => el.getBoundingClientRect().height,
  body      = document.body, 
  html      = document.documentElement,
  debounce = (callback, ms) => {
    let timer = 0
		return function() {
      const self = this, args = arguments;
      clearTimeout(timer)
      timer = setTimeout(() => callback.apply(self, args), ms)
  	}
  }

