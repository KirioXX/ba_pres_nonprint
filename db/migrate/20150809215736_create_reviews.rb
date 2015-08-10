class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :product_id
      t.string :name
      t.string :title
      t.string :text

      t.timestamps null: false
    end
  end
end
