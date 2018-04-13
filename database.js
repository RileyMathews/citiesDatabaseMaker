const database = {}

database.cities = []


database.cities.push(
    {
        name: "Singapore",
        visited: "2018",
        continent: "asia",
        image: "https://www.100resilientcities.org/wp-content/uploads/2017/06/Singapore-hero-cro.jpg",
        attractions: ["Marina Bay Observation Deck", "Garden Conservatory", "Botanical Gardens", "River Cruise", "Historic Tour"]
    },
    {
        name: "London",
        visited: "2013",
        continent: "europe",
        image: "https://www.pexels.com/search/london/",
        attractions: ["Buckingham Palace", "Hard Rock Cafe Vault", "Abbey Road Studio", "London Eye", "Royal Philharmonic Orchestra"]
    },
    {
        name: "Dublin",
        visited: "2012",
        continent: "europe",
        image: "https://d5qsyj6vaeh11.cloudfront.net/images/destinations/dublin/dublin-main/ten-attractions/dublin-top-ten-hapenny-bridge-bg.jpg",
        attractions: ["Pub crawls", "Irish music jams", "Blarney Castle", "Trinity College Exhibits and Displays", "Guinness Storehouse"]
    },
    {
        name: "Edinburgh",
        visited: "2012",
        continent: "europe",
        image: "http://edinburgh.org/media/1020/Carlton-Hill-view.jpg",
        attractions: ["Edinburgh Castle", "Holyrood Park", "The Elephant House", "Grayfriers Kirk", "North Bridge"]
    },
    {
        name: "Paris",
        visited: "2011",
        continent: "europe",
        image: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-500759045_super.jpg?sharp=10&vib=20&w=1200",
        attractions: ["Eiffel Tower", "The Louvre", "Notre-Dame", "Palace of Versailles", "Arc de Triomphe"]
    },
    {
        name: "San Antonio",
        visited: "2011",
        continent: "north america",
        image: "http://media.culturemap.com/crop/07/11/633x475/San-Antonio-downtown-skyline-skyscrapers_154405.jpg",
        attractions: ["The Alamo", "River Walk", "Natural Bridge Caverns", "San Antonio Zoo", "Brackenridge Park"]
    },
    {
        name: "Port Lockroy",
        visited: "2010",
        continent: "antarctica",
        image: "https://www.telegraph.co.uk/content/dam/news/2017/02/18/JS121045603_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450",
        attractions: ["Penguins", "The cool refreshing beaches", "Seals", "Whales", "More Penguins"]
    },
    {
        name: "Venice",
        visited: "2008",
        continent: "europe",
        image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Italy/Venice/Venice-xlarge.jpg",
        attractions: ["Piazza San Marco", "Saint Mark's Basilica", "Dodge's Palace", "Grand Canal", "Rialto Bridge"]
    },
    {
        name: "Rome",
        visited: "2008",
        continent: "europe",
        image: "https://d3jkudlc7u70kh.cloudfront.net/rome-fact.jpg",
        attractions: ["The Colosseum", "St. Peters Basilica", "Trevi Fountain", "Sistine Chapel", "Roman Forum"]
    },
    {
        name: "New York City",
        visited: "2007",
        continent: "north america",
        image: "https://travel.usnews.com/static-travel/images/destinations/44/empire_state_building_getty_zsolt_hlinka.jpg",
        attractions: ["The Empire State Building", "Central Park", "Broadway", "Statue of Liberty", "Times Square"]
    },
)


localStorage.setItem("CitiesDatabase", JSON.stringify(database))