function getRandom(list, property) {
  const maxFloored = Math.floor(list.length);
  const access = Math.floor(Math.random() * (maxFloored)); 
  return list[access][property]
  // The maximum is exclusive and the minimum is inclusive
}


const roles = [
  {
    name: 'ROLE_USER'
  },
  {
    name: 'ROLE_ADMIN'
  }
]
const genres = [
  {
    name: 'FPS'
  },
  {
    name: 'RPG'
  },
  {
    name: 'MMO'
  }
]
const platforms = [
  {
    name: 'PlayStation 5'
  },
  {
    name: 'Xbox Series X'
  },
  {
    name: 'Mobile'
  },
  {
    name: 'Desktop'
  },
]
const users = [
  {
    name: 'jonas12',
    email: 'jonasjonas@gmail.com',
    role: 'ROLE_USER',
    password: '123'
  },
  {
    name: 'MESSI',
    email: 'noesmessi@hotmail.com',
    role: 'ROLE_USER',
    password: 'mesi'
  },
  {
    name: 'Admin',
    email: 'admin@admin.com,',
    role: 'ROLE_ADMIN',
    password: '123'
  }
]
const games = [
  {
    title: 'Disco Elysium',
    price: 12300,
    available: true,
    genre: 'RPG',
    platform: 'desktop'
  },
  {
    title: 'Call of Duty: Black Ops 2',
    price: 32100,
    available: false,
    genre: 'FPS',
    platform: 'PlayStation 5'
  }
]

let purchaseCombinations = []
const purchases = [
  {
    total: 1200,
    User: getRandom(users, 'name'),
    Game: getRandom(games, 'title')
  },
  {
    total: 3500,
    User: getRandom(users, 'name'),
    Game: getRandom(games, 'title')
  },
  {
    total: 4000,
    User: getRandom(users, 'name'),
    Game: getRandom(games, 'title')
  }
].map((r) => {
  let test = (i) => {
    let string = [i.User, i.Game].toString()
    if (purchaseCombinations.includes(string)) {
      i.User = getRandom(users, 'name')
      i.Game = getRandom(games, 'title')
      return test(i)
    } else {
      purchaseCombinations.push(string)
      return i
    }
  }
   
  return test(r) 
})

let reviewCombinations = []
const reviews = [
  {
    comment: 'Great game',
    rating: 4,
    User: getRandom(users, 'name'),
    Game: getRandom(games, 'title')
  },
  {
    comment: 'Mediocre',
    rating: 2,
    User: getRandom(users, 'name'),
    Game: getRandom(games, 'title')
  },
  {
    comment: 'Incredible life-changing experience',
    rating: 5,
    User: getRandom(users, 'name'),
    Game: getRandom(games, 'title')
  },
].map((r) => {
  let test = (i) => {
    let string = [i.User, i.Game].toString()
    if (reviewCombinations.includes(string)) {
      i.User = getRandom(users, 'name')
      i.Game = getRandom(games, 'title')
      return test(i)
    } else {
      reviewCombinations.push(string)
      return i
    }
  }
   
  return test(r) 
})

module.exports = {
  roles,
  genres,
  platforms,
  games,
  users,
  purchases,
  reviews
}