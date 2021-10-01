const mockData = [
  {
    "name": "Horizon Zero Dawn™ Complete Edition",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1623162512",
    "discount_percent": 40,
    "initial_formatted": "$49.99",
    "final_formatted": "$29.99",
    "developer": "Guerrilla",
    "url": "https://store.steampowered.com/app/1151640"
  },
  {
    "name": "No Man's Sky",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header_alt_assets_5.jpg?t=1630512567",
    "discount_percent": 50,
    "initial_formatted": "54,99€",
    "final_formatted": "27,49€",
    "developer": "Hello Games",
    "url": "https://store.steampowered.com/app/275850"
  },
  {
    "name": "MADNESS: Project Nexus",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/488860/header.jpg?t=1632953027",
    "discount_percent": 10,
    "initial_formatted": "$24.99",
    "final_formatted": "$22.49",
    "developer": "GIBBING TREE, LLC",
    "url": "https://store.steampowered.com/app/488860"
  },
  {
    "name": "Middle-earth: Shadow of War Definitive Edition",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/281112/header_586x192.jpg?t=1539277357",
    "discount_percent": "-80%",
    "initial_formatted": "$59.99",
    "final_formatted": "$11.99",
    "developer": "Monolith Productions",
    "url": "https://store.steampowered.com/sub/281112"
  },
  {
    "name": "Batman: Arkham Collection",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/320795/header_586x192.jpg?t=1543527662",
    "discount_percent": "-80%",
    "initial_formatted": "$59.99",
    "final_formatted": "$11.99",
    "developer": "Rocksteady Studios",
    "url": "https://store.steampowered.com/sub/320795"
  },
  {
    "name": "NieR Replicant™ ver.1.22474487139...",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1113560/header.jpg?t=1626255600",
    "discount_percent": 35,
    "initial_formatted": "$59.99",
    "final_formatted": "$38.99",
    "developer": "Square Enix",
    "url": "https://store.steampowered.com/app/1113560"
  },
  {
    "name": "Outer Wilds - Echoes of the Eye",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1622100/header.jpg?t=1632855674",
    "discount_percent": 10,
    "initial_formatted": "$14.99",
    "final_formatted": "$13.49",
    "developer": "Mobius Digital",
    "url": "https://store.steampowered.com/app/1622100"
  },
  {
    "name": "Outer Wilds",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg?t=1633026544",
    "discount_percent": 40,
    "initial_formatted": "$24.99",
    "final_formatted": "$14.99",
    "developer": "Mobius Digital",
    "url": "https://store.steampowered.com/app/753640"
  },
  {
    "name": "HITMAN 2 - Gold Edition",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/272966/header_586x192.jpg?t=1575673166",
    "discount_percent": "-85%",
    "initial_formatted": "$99.99",
    "final_formatted": "$14.99",
    "developer": "IO Interactive A/S",
    "url": "https://store.steampowered.com/sub/272966"
  },
  {
    "name": "NieR:Automata™",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/524220/header.jpg?t=1624266255",
    "discount_percent": 50,
    "initial_formatted": "39,99€",
    "final_formatted": "19,99€",
    "developer": "Square Enix",
    "url": "https://store.steampowered.com/app/524220"
  },
  {
    "name": "Days Gone",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg?t=1622218660",
    "discount_percent": 20,
    "initial_formatted": "$49.99",
    "final_formatted": "$39.99",
    "developer": "Bend Studio",
    "url": "https://store.steampowered.com/app/1259420"
  },
  {
    "name": "Outer Wilds - Archaeologist Edition",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/bundles/22795/fytew9hz28f9udt5/header_586x192.jpg?t=1632845002",
    "discount_percent": "-32%",
    "initial_formatted": "$39.98",
    "final_formatted": "$27.06",
    "developer": "Mobius Digital",
    "url": "https://store.steampowered.com/bundle/22795"
  },
  {
    "name": "The Elder Scrolls Online - Blackwood",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1400970/header.jpg?t=1632426324",
    "discount_percent": 50,
    "initial_formatted": "$39.99",
    "final_formatted": "$19.99",
    "developer": "Zenimax Online Studios",
    "url": "https://store.steampowered.com/app/1400970"
  },
  {
    "name": "Rogue Lords",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1069690/header.jpg?t=1632989577",
    "discount_percent": 20,
    "initial_formatted": "$24.99",
    "final_formatted": "$19.99",
    "developer": "Leikir Studio",
    "url": "https://store.steampowered.com/app/1069690"
  },
  {
    "name": "Mortal Kombat 11 Ultimate",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/518699/header_586x192.jpg?t=1606759785",
    "discount_percent": "-65%",
    "initial_formatted": "$59.99",
    "final_formatted": "$20.99",
    "developer": "NetherRealm Studios",
    "url": "https://store.steampowered.com/sub/518699"
  },
  {
    "name": "FEAR Complete Pack",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/12357/header_586x192.jpg?t=1536093787",
    "discount_percent": "-80%",
    "initial_formatted": "$54.99",
    "final_formatted": "$10.99",
    "developer": "Monolith Productions, Inc.",
    "url": "https://store.steampowered.com/sub/12357"
  },
  {
    "name": "Legion TD 2 - Multiplayer Tower Defense",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/469600/header.jpg?t=1633105292",
    "discount_percent": 20,
    "initial_formatted": "$19.99",
    "final_formatted": "$15.99",
    "developer": "AutoAttack Games",
    "url": "https://store.steampowered.com/app/469600"
  },
  {
    "name": "Impostor Factory",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1182620/header.jpg?t=1633045914",
    "discount_percent": 10,
    "initial_formatted": "$9.99",
    "final_formatted": "$8.99",
    "developer": "Freebird Games",
    "url": "https://store.steampowered.com/app/1182620"
  },
  {
    "name": "Monster Hunter World: Iceborne",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1118010/header.jpg?t=1623978554",
    "discount_percent": 38,
    "initial_formatted": "$39.99",
    "final_formatted": "$24.79",
    "developer": "CAPCOM Co., Ltd.",
    "url": "https://store.steampowered.com/app/1118010"
  },
  {
    "name": "Injustice 2 Legendary Edition",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/249064/header_586x192.jpg?t=1615570065",
    "discount_percent": "-75%",
    "initial_formatted": "$59.99",
    "final_formatted": "$14.99",
    "developer": "NetherRealm Studios",
    "url": "https://store.steampowered.com/sub/249064"
  },
  {
    "name": "Untitled Goose Game",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/837470/header.jpg?t=1623284142",
    "discount_percent": 50,
    "initial_formatted": "$19.99",
    "final_formatted": "$9.99",
    "developer": "House House",
    "url": "https://store.steampowered.com/app/837470"
  },
  {
    "name": "Monster Hunter: World",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1623978557",
    "discount_percent": 34,
    "initial_formatted": "₩ 34,900",
    "final_formatted": "₩ 23,030",
    "developer": "CAPCOM Co., Ltd.",
    "url": "https://store.steampowered.com/app/582010"
  },
  {
    "name": "Mortal Kombat 11 Ultimate + Injustice 2 Legendary Edition Bundle",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/557569/header_586x192.jpg?t=1615913715",
    "discount_percent": "-65%",
    "initial_formatted": "$99.99",
    "final_formatted": "$34.99",
    "developer": "NetherRealm Studios",
    "url": "https://store.steampowered.com/sub/557569"
  },
  {
    "name": "The Jackbox Party Pack 8",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1552350/header.jpg?t=1632859188",
    "discount_percent": 10,
    "initial_formatted": "$29.99",
    "final_formatted": "$26.99",
    "developer": "Jackbox Games, Inc.",
    "url": "https://store.steampowered.com/app/1552350"
  },
  {
    "name": "Age of Empires II: Definitive Edition",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/813780/header.jpg?t=1631209290",
    "discount_percent": 33,
    "initial_formatted": "₩ 21,000",
    "final_formatted": "₩ 14,070",
    "developer": "Forgotten Empires",
    "url": "https://store.steampowered.com/app/813780"
  },
  {
    "name": "OCTOPATH TRAVELER™",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/921570/header.jpg?t=1629997522",
    "discount_percent": 50,
    "initial_formatted": "$59.99",
    "final_formatted": "$29.99",
    "developer": "Square Enix",
    "url": "https://store.steampowered.com/app/921570"
  },
  {
    "name": "Middle-earth: Shadow of Mordor Game of the Year Edition",
    "header_image": "https://cdn.cloudflare.steamstatic.com/steam/subs/51209/header_586x192.jpg?t=1604102628",
    "discount_percent": "-75%",
    "initial_formatted": "$19.99",
    "final_formatted": "$4.99",
    "developer": "Monolith Productions, Inc.",
    "url": "https://store.steampowered.com/sub/51209"
  },
  {
    "name": "Age of Empires III: Definitive Edition",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/933110/header.jpg?t=1633028458",
    "discount_percent": 33,
    "initial_formatted": "$19.99",
    "final_formatted": "$13.39",
    "developer": "Tantalus Media",
    "url": "https://store.steampowered.com/app/933110"
  },
  {
    "name": "Batman™: Arkham Origins",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/209000/header.jpg?t=1597955900",
    "discount_percent": 75,
    "initial_formatted": "$19.99",
    "final_formatted": "$4.99",
    "developer": "WB Games Montreal",
    "url": "https://store.steampowered.com/app/209000"
  },
  {
    "name": "The Forgotten City",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/874260/header.jpg?t=1633098618",
    "discount_percent": 20,
    "initial_formatted": "$24.99",
    "final_formatted": "$19.99",
    "developer": "Modern Storyteller",
    "url": "https://store.steampowered.com/app/874260"
  },
  {
    "name": "Mad Max",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/234140/header.jpg?t=1609425539",
    "discount_percent": 75,
    "initial_formatted": "$19.99",
    "final_formatted": "$4.99",
    "developer": "Avalanche Studios",
    "url": "https://store.steampowered.com/app/234140"
  },
  {
    "name": "Need for Speed™ Heat",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg?t=1620488613",
    "discount_percent": 86,
    "initial_formatted": "$69.99",
    "final_formatted": "$9.79",
    "developer": "Ghost Games",
    "url": "https://store.steampowered.com/app/1222680"
  }
]

const getData = async () => {
  return mockData
}

const buildCardsInHtml = (data) => {
  return data.map(({ name, header_image, discount_percent, initial_formatted, final_formatted, developer, url }) => {
    const card = document.createElement('a')
    card.classList.add('card')
    card.href = url

    const img = document.createElement('div')
    img.classList.add('image-banner')
    img.style.backgroundImage = `url(${header_image})`
    card.appendChild(img)

    const price = document.createElement('div')
    price.classList.add('flex')
    const percentOff = document.createElement('i')
    percentOff.classList.add('percent-off')
    percentOff.innerText = discount_percent

    const container = document.createElement('div')
    container.classList.add('flex', 'spc-btw')

    const priceContainer = document.createElement('div')
    priceContainer.classList.add('flex-col', 'flex-br')
    const initial = document.createElement('span')
    initial.innerText = initial_formatted
    initial.classList.add('initial-price')
    priceContainer.appendChild(initial)
    const discount = document.createElement('span')
    discount.innerText = final_formatted
    discount.classList.add('sale-price')
    priceContainer.appendChild(discount)

    const devContainer = document.createElement('div')
    devContainer.classList.add('flex-col', 'flex-br')
    const label = document.createElement('span')
    label.innerText = 'Developer'
    label.classList.add('label')
    devContainer.appendChild(label)
    const dev = document.createElement('span')
    dev.innerText = developer
    dev.classList.add('developer')
    devContainer.appendChild(dev)

    price.appendChild(percentOff)
    price.appendChild(priceContainer)
    container.appendChild(price)
    container.appendChild(devContainer)
    card.appendChild(container)
    return card
  })
}

function appendChildrenToNode(node, ...children){
  const documentFragment = document.createDocumentFragment();
  children.forEach(child => {
      if (Array.isArray(child)) {
          child.forEach(child => documentFragment.appendChild(child))
      } else {
          documentFragment.appendChild(child);
      }
  });
  node.appendChild(documentFragment);
}

const main = async () => {
  const data = await getData()
  const cards = buildCardsInHtml(data)
  console.log(cards)
  appendChildrenToNode(document.querySelector('#game-cards'), cards)
}
main()