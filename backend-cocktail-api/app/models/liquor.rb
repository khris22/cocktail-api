class Liquor < ApplicationRecord
    has_many :liquors_cocktails
    has_many :cocktails, through: :liquors_cocktails
end
