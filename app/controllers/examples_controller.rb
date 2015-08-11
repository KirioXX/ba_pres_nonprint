class ExamplesController < ApplicationController
  layout 'examples'
  def show
  end

  def view
    @product = Product.find(params[:id])
    @thumb = Product.find([3,4,5,6])
  end

  def json
    @product = Product.find(params[:id])
    render :json => @product.to_json(:methods => [:mainImage_url])
  end
end
