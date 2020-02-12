class LiquorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :alcohol_content, :made_from, :origin
  has_many :cocktails, through: :liquor_cocktails
end
