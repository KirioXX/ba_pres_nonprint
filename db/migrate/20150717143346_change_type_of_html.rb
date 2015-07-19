class ChangeTypeOfHtml < ActiveRecord::Migration
  def change
    change_column :pages, :html, :string
  end
end
