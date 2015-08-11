class Product < ActiveRecord::Base
  has_many :reviews, :inverse_of => :product

  has_attached_file :image,
                    :styles => {
                        :thumb => "100x100#",
                        :small  => "260x274>",
                        :medium => "458x482" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  # add a delete_<asset_name> method:
  attr_accessor :delete_image
  before_validation { self.image.clear if self.delete_image == '1' }

  def mainImage_url
    image.url(:medium)
  end
end
