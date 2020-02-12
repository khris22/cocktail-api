class Liquor < ApplicationRecord
    has_many :liquor_cocktails
    has_many :cocktails, through: :liquor_cocktails

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }
end
