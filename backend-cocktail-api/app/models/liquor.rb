class Liquor < ApplicationRecord
    has_many :liquors_cocktails
    has_many :cocktails, through: :liquors_cocktails

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }
end
