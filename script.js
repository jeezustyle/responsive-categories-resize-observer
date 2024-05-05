//FILM TYPES
const genres = [
  {
    title: 'Family',
  },
  {
    title: 'Comedy',
  },
  {
    title: 'Fantastic',
  },
  {
    title: 'Horror',
  },
  {
    title: 'Thriller',
  },
  {
    title: 'Action',
  },
  {
    title: 'Adventure',
  },
  {
    title: 'Biography',
  },
  {
    title: 'Documentary',
  },
]

const menu = document.querySelector('.menu')
let html

const ent = ([entry]) => {
  const visibles = Math.floor((entry.contentRect.width - 130) / 130)
  html = genres.slice(0, visibles - 1).reduce((acc, curr) => {
    return (acc += `<a href="#">${curr.title}</a>`)
  }, '')
  const invisibles = genres.slice(visibles - 1)
  if (invisibles.length > 0) {
    html += `<div class="dropdown">`
    html += `<button>Category</button>`
    html += `<nav>`
    html += invisibles.reduce((acc, curr) => {
      return (acc += `<a href="#">${curr.title}</a>`)
    }, '')
    html += `</nav>`
    html += `</div>`
  }
  menu.innerHTML = html
}

const resizeObserverFilm = new ResizeObserver(ent)
resizeObserverFilm.observe(menu)

// SONG ALBUMS
const boxes = document.querySelectorAll('.boxes')

const entries = (entries) => {
  entries.forEach((entry) => {
    const visibles = Math.floor(entry.contentRect.width / 200)
    entry.target.querySelectorAll('.box').forEach((box, index) => {
      if (index < visibles) {
        box.style.display = 'flex'
      } else {
        box.style.display = 'none'
      }
    })
  })
}

const resizeObserver = new ResizeObserver(entries)
boxes.forEach((box) => resizeObserver.observe(box))
