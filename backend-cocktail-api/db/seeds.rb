# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Liquor - From Wikipedia
vodka = Liquor.create(name: 'vodka', alcohol_content: '40%', made_from: 'grain or potatoes', origin: 'Poland, Russia')
tequila = Liquor.create(name: 'tequila', alcohol_content: '35% - 55%', made_from: 'agave plant', origin: 'Mexico')
rum = Liquor.create(name: 'rum', alcohol_content: '40%', made_from: 'sugarcane', origin: 'Carribean')
gin =  Liquor.create(name: 'gin', alcohol_content: '40% - 47%', made_from: 'Juniper Berries', origin: 'Netherlands')

# Cocktails
# vodka - moscow mule, cosmopolitan, bloddy mary, black russian, vodka tonic, screwdriver, cape codder
moscow_mule = Cocktail.create(name: 'Moscow Mule', flavor: 'spicy', ingredient: '4 oz Ginger beer, 1 1/2 oz Vodka, 1/6 oz Lime juice', preparation: 'Combine vodka and ginger beer in a copper mug or highball glass filled with ice. Add lime juice. Stir gently and garnish with a lime slice.', pic: 'https://unsplash.com/photos/wMA3PMrHksU')

# tequila - margarita, tequila sunrise, paloma
margarita = Cocktail.create(name: 'Margarita', flavor: 'sour', ingredient: '2 oz Tequila, 1 oz Lime juice, 1 oz Cointreau', preparation: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt). Garnish and serve over ice.', pic: 'https://unsplash.com/photos/K5IUb0kBZZ8')

# rum - rum & coke, honeysuckle cocktail, 
honeysuckle = Cocktail.create(name: 'Honeysuckle', flavor: 'sweet', ingredient: '2 oz Angostura seven-year-old rum, 3⁄4 oz Fresh lime juice, 3⁄4 oz Honey syrup, 1 dash Angostura orange bitters', preparation: 'Add all ingredients into a shaker with ice and shake. Strain into a chilled coupe glass. Garnish with a lime wheel.', pic: 'https://unsplash.com/photos/KrMwGbcv5lU')

# long island iced tea - vodka, rum, tequila, gin
long_island = Cocktail.create(name: 'Long Island Iced Tea', flavor: '', ingredient: '1.5 cl Tequila, 1.5 cl Vodka, 1.5 cl White rum, 1.5 cl Triple sec, 1.5 cl Gin, 2.5 cl Lemon juice, 3.0 cl Gomme Syrup, 1 dash of Coke', preparation: 'Add all ingredients into highball glass filled with ice. Stir gently. Garnish with lemon spiral. Serve with straw.', pic: 'https://unsplash.com/photos/RiLzlQzwzik')

# LiquorsCocktails
# LiquorCocktail.create(liquor: 1, cocktail: 1)
LiquorCocktail.create(liquor: vodka, cocktail: moscow_mule)
LiquorCocktail.create(liquor: tequila, cocktail: margarita)
LiquorCocktail.create(liquor: rum, cocktail: honeysuckle)
# LiquorsCocktails.create(liquor: tequila, vodka, rum, gin, cocktail: long_island)
LiquorCocktail.create(liquor: tequila, cocktail: long_island)
LiquorCocktail.create(liquor: vodka, cocktail: long_island)
LiquorCocktail.create(liquor: rum, cocktail: long_island)
LiquorCocktail.create(liquor: gin, cocktail: long_island)