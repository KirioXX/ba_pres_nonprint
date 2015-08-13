class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :title
      t.string :text
      t.integer :score
      t.integer :product_id

      t.timestamps null: false
    end
  end
end
