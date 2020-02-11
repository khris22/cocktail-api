class Cocktail < ApplicationRecord
    has_many :liquors_cocktails
    has_many :liquors, through: :liquors_cocktails
end
