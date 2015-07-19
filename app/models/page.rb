class Page < ActiveRecord::Base
  def page_type_enum
    [['HTML',0], ['Text',1],['Image',2]]
  end
end
