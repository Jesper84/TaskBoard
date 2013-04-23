class Task < ActiveRecord::Base
  attr_accessible :description, :estimate, :title
  has_one :user
end
