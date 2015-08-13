json.array!(@categories) do |category|
  json.extract! category, :id, :name, :thumb
  json.url category_url(category, format: :json)
end
