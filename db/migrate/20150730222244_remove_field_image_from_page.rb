class RemoveFieldImageFromPage < ActiveRecord::Migration
  def change
    remove_column :pages, :image, :string
  end
end
