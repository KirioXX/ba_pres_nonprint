class Page < ActiveRecord::Base
  has_attached_file :image,
                    :styles => {
                        :thumb => '100x100#',
                        :small => '150x150>',
                        :medium => '200x200>',
                        :large => '1500x770>'
                    }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  attr_accessor :delete_image
  before_validation { self.image.clear if self.delete_image == '1' }

  def page_type_enum
    [['HTML',0], ['Text',1],['Image',2]]
  end
end
