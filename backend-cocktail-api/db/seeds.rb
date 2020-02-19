# From: Wikipedia, cocktailDB, liquor.com
# Liquor 
vodka = Liquor.create(name: 'Vodka', alcohol_content: '40%', made_from: 'grain or potatoes', origin: 'Poland, Russia')
tequila = Liquor.create(name: 'Tequila', alcohol_content: '35% - 55%', made_from: 'agave plant', origin: 'Mexico')
rum = Liquor.create(name: 'Rum', alcohol_content: '40%', made_from: 'sugarcane', origin: 'Carribean')
gin =  Liquor.create(name: 'Gin', alcohol_content: '40% - 47%', made_from: 'Juniper Berries', origin: 'Netherlands')
whiskey = Liquor.create(name: 'Scotch Whiskey', alcohol_content: ' 40% - 43%', made_from: 'Malted barley', origin: 'Scotland')
brandy = Liquor.create(name: 'Brandy', alcohol_content: '35 – 60%', made_from: 'pomace or mash or wine of any other fruit', origin: 'France')
bitters = Liquor.create(name: 'Bitters', alcohol_content: '35% - 45%', made_from: 'botanicals, like aromatic herbs, bark, roots, and fruit', origin: 'Venezuela')
coffee_liqueurs =Liquor.create(name: 'Coffee Liqueurs', alcohol_content: 'about 20%', made_from: 'rum, coffee, sugar and vanilla bean', origin: 'Spain')
cream_liqueurs = Liquor.create(name: 'Cream Liqueurs', alcohol_content: '14% - 19%', made_from: 'dairy cream and a generally flavourful liquor', origin: 'Europe')

# Cocktails
# vodka
moscow_mule = Cocktail.create(name: 'Moscow Mule', flavor: 'spicy', ingredient: '4 oz Ginger beer, 1 1/2 oz Vodka, 1/6 oz Lime juice', preparation: 'Combine vodka and ginger beer in a copper mug or highball glass filled with ice. Add lime juice. Stir gently and garnish with a lime slice.', pic: 'https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg')

bloody_mary = Cocktail.create(name: 'Bloody Mary', flavor: 'salty', ingredient: '1 Lemon wedge, 1 Lime wedge, 2 oz Vodka, 4 oz Tomato juice, 2 dashes Tabasco sauce, 2 tsp Prepared horseradish, 2 dashes Worcestershire sauce, 1 pinch Celery salt, 1 pinch Ground black pepper, 1 pinch smoked paprika, Garnish: Lime wedge, Garnish: Green olives, Garnish: Parsley sprig, Garnish: Celery stalk', preparation: 'Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes.
Add the slice of lemon and serve.', pic: 'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg')

blue_lagoon = Cocktail.create(name: 'Blue Lagoon', flavor: 'sweet', ingredient: '1 part Blue Curacao, 1 part Vodka, 4 parts Lemonade', preparation: 'Pour vodka and blue curacao in a shaker with ice, shake well & strain into ice filled highball glass, top with lemonade, garnish and serve.', pic: 'https://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg')

# tequila
margarita = Cocktail.create(name: 'Margarita', flavor: 'sour', ingredient: '2 oz Tequila, 1 oz Lime juice, 1 oz Cointreau', preparation: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt). Garnish and serve over ice.', pic: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg')

# rum
thriller = Cocktail.create(name: 'Thriller', flavor: 'sweet', ingredient: '1 Measure - Green Ginger Wine, 1 Measure - Orange Juice, 1.5 Measures - Rum', preparation: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.', pic: 'https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg')

space = Cocktail.create(name: 'Space Odyseey', flavor: 'sweet', ingredient: 'Ginger beer, Dark rum, Angostura bitters and Cherries', preparation: 'Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.', pic: 'https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg')

mojito = Cocktail.create(name: 'Mojito', flavor: 'sour', ingredient: '1 1/2 oz White rum, 6 leaves of Mint, Soda Water, 1 oz Fresh lime juice, 2 teaspoons Sugar', preparation: 'Mint sprigs muddled with sugar and lime juice. Rum added and topped with soda water. Garnished with sprig of mint leaves. Served with a straw.', pic: 'https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg')

# long island iced tea
long_island = Cocktail.create(name: 'Long Island Iced Tea', flavor: 'sweet', ingredient: '1.5 cl Tequila, 1.5 cl Vodka, 1.5 cl White rum, 1.5 cl Triple sec, 1.5 cl Gin, 2.5 cl Lemon juice, 3.0 cl Gomme Syrup, 1 dash of Coke', preparation: 'Add all ingredients into highball glass filled with ice. Stir gently. Garnish with lemon spiral. Serve with straw.', pic: 'https://image.freepik.com/free-vector/long-island-ice-tea-cocktail-realistic_1284-3888.jpg')

#gin
salty_dog = Cocktail.create(name: 'Salty Dog', flavor: 'salty', ingredient: '3 1/3 oz Grapefruit juice, 1 1/3 oz Vodka or Gin', preparation: 'Pour all ingredients over ice cubes in a highball glass.Stir well and serve.Vodka may be substituted for gin, if preferred.', pic: 'https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg')

#brandy
b = Cocktail.create(name: 'B-52', flavor: 'bitter', ingredient: '33/100 oz Coffee liqueur, 33/100 oz Baileys Irish cream liqueur, 33/100 oz Grand Marnier liqueur - brandy', preparation: 'Layer ingredients into a shot glass. Serve with a stirrer.', pic: 'https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg')

#whiskey
mud = Cocktail.create(name: 'Tennesee Mud', flavor: 'bitter', ingredient: '1⁄2 ounce Amaretto 1⁄2 ounce whiskey (preferably Jack Daniels) ounces brewed coffee, hot whipped cream, for garnish', preparation: 'Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.', pic: 'https://www.thecocktaildb.com/images/media/drink/txruqv1441245770.jpg')

#bitters
#coffee liqueur
baby = Cocktail.create(name: 'Baby Eskimo', flavor: 'sweet', ingredient: ' kahlua coffee liqueur, milk, ice cream', preparation: 'Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick butter knife or spoon works too. Consume immediately and often. Nice and light, great for following a heavy drink.', pic: 'https://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg')

#cream liqueur
zorro = Cocktail.create(name: 'Zorro', flavor: 'sweet', ingredient: '2 Sambuca, 2 Baileys irish cream, 2 White Creme de Menthe', preparation: 'Add all and pour black coffee and add whipped cream on top.', pic: 'https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg')

texas = Cocktail.create(name: 'Texas Sling', flavor: 'sweet', ingredient: '1/2 Kahlua, 1/2 Irish cream, 1/2 Amaretto, 1/2 Bacardi 151 proof rum, 1 Cream', preparation: 'Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.', pic: 'https://www.thecocktaildb.com/images/media/drink/ypl13s1504890158.jpg')


# LiquorsCocktails
LiquorCocktail.create(liquor: vodka, cocktail: moscow_mule)
LiquorCocktail.create(liquor: tequila, cocktail: margarita)
LiquorCocktail.create(liquor: whiskey, cocktail: mud)
LiquorCocktail.create(liquor: tequila, cocktail: long_island)
LiquorCocktail.create(liquor: vodka, cocktail: long_island)
LiquorCocktail.create(liquor: rum, cocktail: long_island)
LiquorCocktail.create(liquor: gin, cocktail: long_island)
LiquorCocktail.create(liquor: vodka, cocktail: bloody_mary )
LiquorCocktail.create(liquor: vodka, cocktail: blue_lagoon)
LiquorCocktail.create(liquor: cream_liqueurs, cocktail: texas )
LiquorCocktail.create(liquor: coffee_liqueurs, cocktail: texas)
LiquorCocktail.create(liquor: rum, cocktail: texas)
LiquorCocktail.create(liquor: rum, cocktail: thriller)
LiquorCocktail.create(liquor: rum, cocktail: mojito)
LiquorCocktail.create(liquor: rum, cocktail: space)
LiquorCocktail.create(liquor: gin, cocktail: salty_dog)
LiquorCocktail.create(liquor: brandy, cocktail: b)
LiquorCocktail.create(liquor: coffee_liqueurs, cocktail: baby)
LiquorCocktail.create(liquor: cream_liqueurs, cocktail: zorro)