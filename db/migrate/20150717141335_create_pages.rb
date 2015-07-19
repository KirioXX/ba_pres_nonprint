class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.integer :page_type
      t.text :body
      t.string :image
      t.text :html
      t.integer :number
      t.string :custom_css
      t.string :custom_js

      t.timestamps null: false
    end
  end
end
