class Review < ActiveRecord::Base
  belongs_to :product, :inverse_of => :reviews
end
