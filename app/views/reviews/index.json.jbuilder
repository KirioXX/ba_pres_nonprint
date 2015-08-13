json.array!(@reviews) do |review|
  json.extract! review, :id, :name, :title, :text, :score, :product_id
  json.url review_url(review, format: :json)
end
