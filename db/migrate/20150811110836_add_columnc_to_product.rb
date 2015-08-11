class AddColumncToProduct < ActiveRecord::Migration
  def change
    add_column :products, :hero, :string
  end
end
