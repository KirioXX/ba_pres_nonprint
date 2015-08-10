class ExamplesController < ApplicationController
  layout 'examples'
  def show
  end

  def view
    @product = Product.find(params[:id])
    @thumb = Product.find([3,4,5,6])
  end
end
