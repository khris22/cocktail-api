class Cocktail < ApplicationRecord
    has_many :liquors_cocktails
    has_many :liquors, through: :liquors_cocktails

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }
end
