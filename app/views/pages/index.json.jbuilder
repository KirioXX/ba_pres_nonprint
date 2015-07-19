json.array!(@pages) do |page|
  json.extract! page, :id, :title, :page_type, :body, :image, :html, :number, :custom_css, :custom_js
  json.url page_url(page, format: :json)
end
