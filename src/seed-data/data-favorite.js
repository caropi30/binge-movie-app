const dataFavorites = [
  {
    title: 'Avatar: The way of the water',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285127/bingeMovies/avatar-the-way-of-the-water_jszjhb.jpg',
    year: 2022,
    category: 'movie',
    rating: 'PG-13',
    isTrending: true,
    genres: [
      'action',
      'adventure',
      'fantasy'
    ],
    trailer: 'https://www.youtube.com/watch?v=bDFKIs4v0B4',
    score: 7.8,
    plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    createdAt: '2023-02-11T17:39:43.807Z',
    updatedAt: '2023-02-11T17:39:43.807Z',
    id: '63e7d2df6ecee053a9497fc7'
  },
  {
    title: 'Babylon',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285127/bingeMovies/babylon_w5xfrj.jpg',
    year: 2022,
    category: 'movie',
    rating: 'R',
    isTrending: false,
    genres: [
      'comedy',
      'drama',
      'history'
    ],
    trailer: 'https://www.youtube.com/watch?v=5muQK7CuFtY',
    score: 7.6,
    plot: 'An original epic set in 1920s Los Angeles led by Brad Pitt, Margot Robbie and Diego Calva, with an ensemble cast including Jovan Adepo, Li Jun Li and Jean Smart. A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.',
    createdAt: '2023-02-11T17:39:43.807Z',
    updatedAt: '2023-02-11T17:39:43.807Z',
    id: '63e7d2df6ecee053a9497fca'
  },
  {
    title: 'Everything Everywhere All at Once',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285128/bingeMovies/everything-everywhere-all-at-once_mjdhqx.jpg',
    year: 2022,
    category: 'movie',
    rating: 'R',
    isTrending: true,
    genres: [
      'action',
      'adventure',
      'comedy'
    ],
    trailer: 'https://www.youtube.com/watch?v=wxN1T1uxQ2g',
    score: 8,
    plot: 'With her laundromat teetering on the brink of failure and her marriage to wimpy husband Waymond on the rocks, overworked Evelyn Wang struggles to cope with everything, including tattered relationships with her judgmental father Gong Gong and her daughter Joy. She must also brace herself for an unpleasant meeting with an impersonal bureaucrat: Deirdre, the shabbily-dressed IRS auditor. However, as the stern agent loses patience, an inexplicable multiverse rift becomes an eye-opening exploration of parallel realities. Will Evelyn jump down the rabbit hole? How many stars are in the universe? Can weary Evelyn fathom the irrepressible force of possibilities, tap into newfound powers, and prevent an evil entity from destroying the thin, countless layers of the unseen world?',
    createdAt: '2023-02-11T17:39:43.807Z',
    updatedAt: '2023-02-11T17:39:43.807Z',
    id: '63e7d2df6ecee053a9497fcb'
  },
  {
    title: 'Megan',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285128/bingeMovies/megan_lpfvu3.jpg',
    year: 2022,
    category: 'movie',
    rating: 'PG-13',
    isTrending: false,
    genres: [
      'terror',
      'science fiction',
      'suspense'
    ],
    trailer: 'https://www.youtube.com/watch?v=e_6JPqOCH3c',
    score: 6.5,
    plot: "When Gemma suddenly becomes the caretaker of her orphaned 8-year-old niece, Cady, Gemma's unsure and unprepared to be a parent. Under intense pressure at work, Gemma decides to pair her M3GAN prototype with Cady in an attempt to resolve both problems-a decision that will have unimaginable consequences.",
    createdAt: '2023-02-11T17:39:43.808Z',
    updatedAt: '2023-02-11T17:39:43.808Z',
    id: '63e7d2df6ecee053a9497fd5'
  },
  {
    title: 'Puss in Boots: The Last Wish',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285128/bingeMovies/puss-in-boots-last-wish_dm9zry.jpg',
    year: 2022,
    category: 'movie',
    rating: 'PG',
    isTrending: false,
    genres: [
      'animation',
      'adventure',
      'comedy'
    ],
    trailer: 'https://www.youtube.com/watch?v=RqrXhwS33yc',
    score: 7.9,
    plot: "Sadly, Puss in Boots, the undaunted Spanish lover and hero, is now down to the last of his nine lives, a decade after the events of El gato con botas (2011). And as if that weren't enough, the unstoppable bounty hunter known as The Big Bad Wolf is after him. To restore all of his precious lives and escape an inglorious fate, Puss must pluck up his courage to embark on a dangerous quest into the Dark Forest to find the legendary Wishing Star.",
    createdAt: '2023-02-11T17:39:43.808Z',
    updatedAt: '2023-02-11T17:39:43.808Z',
    id: '63e7d2df6ecee053a9497fce'
  },
  {
    title: 'The Banshees of Inisherin',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285128/bingeMovies/banshees-of-inisherin_b0xnxj.jpg',
    year: 2022,
    category: 'movie',
    rating: 'R',
    isTrending: false,
    genres: [
      'comedy',
      'drama'
    ],
    trailer: 'https://www.youtube.com/watch?v=uRu3zLOJN2c',
    score: 7.8,
    plot: "Set on a remote island off the west coast of Ireland, THE BANSHEES OF INISHERIN follows lifelong friends Padraic (Colin Farrell) and Colm (Brendan Gleeson), who find themselves at an impasse when Colm unexpectedly puts an end to their friendship. A stunned Padraic, aided by his sister Siobhan (Kerry Condon) and troubled young islander Dominic (Barry Keoghan), endeavours to repair the relationship, refusing to take no for an answer. But Padraic's repeated efforts only strengthen his former friend's resolve and when Colm delivers a desperate ultimatum, events swiftly escalate, with shocking consequences.",
    createdAt: '2023-02-11T17:39:43.808Z',
    updatedAt: '2023-02-11T17:39:43.808Z',
    id: '63e7d2df6ecee053a9497fd7'
  },
  {
    title: 'Wednesday',
    thumbnail: 'https://res.cloudinary.com/alais29/image/upload/v1675285127/bingeMovies/wednesday_nkpu9t.jpg',
    year: 2022,
    category: 'tv show',
    rating: 'PG-13',
    isTrending: true,
    genres: [
      'comedy',
      'crime',
      'fantasy'
    ],
    trailer: 'https://www.youtube.com/watch?v=Di310WS8zLk',
    score: 8.2,
    plot: "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago - all while navigating her new and very tangled relationships at Nevermore.",
    createdAt: '2023-02-11T17:39:43.808Z',
    updatedAt: '2023-02-11T17:39:43.808Z',
    id: '63e7d2df6ecee053a9497fcc'
  }
]

export default dataFavorites
