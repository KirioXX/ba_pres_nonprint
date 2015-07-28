class ExamplesController < ApplicationController
  def show
    @page = params[:name]
    render "examples/show", :layout => false
  end
end
