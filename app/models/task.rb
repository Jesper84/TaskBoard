class Task < ActiveRecord::Base
  attr_accessible :description, :estimate, :title, :status
  has_one :user
end
