class LiquorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :alcohol_content, :made_from, :origin, :cocktails
  has_many :cocktails, through: :liquor_cocktails
end
