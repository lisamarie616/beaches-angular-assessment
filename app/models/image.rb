class Image < ActiveRecord::Base
  belongs_to :beach
  has_attached_file :image,
                    :styles => {large: "1024x768>", medium: "500x500>", thumb: "100x100#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def as_json(options={})
    {beach_id: self.beach_id, thumb: self.image.url(:thumb), img: self.image.url(:large)}
  end
end