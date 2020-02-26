class Cocktail < ApplicationRecord
    has_many :liquor_cocktails, dependent: :destroy
    has_many :liquors, through: :liquor_cocktails

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }

    scope :ordered_by_name, -> { order(name: :asc) }
end
