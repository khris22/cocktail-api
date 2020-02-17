class Cocktail < ApplicationRecord
    has_many :liquor_cocktails, dependent: :destroy
    has_many :liquors, through: :liquor_cocktails

    # join table has no pther input but the ids of the models we want to associate
    # has_and_belongs_to_many :liquors


    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }
end
