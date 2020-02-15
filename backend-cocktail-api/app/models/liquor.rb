class Liquor < ApplicationRecord
    has_many :liquor_cocktails
    has_many :cocktails, through: :liquor_cocktails

    # has_and_belongs_to_many :liquors

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }
end
