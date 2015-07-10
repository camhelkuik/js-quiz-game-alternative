require_relative "database_class_methods"
require_relative "database_instance_methods"

class Choice
  
  include DatabaseInstanceMethods
  extend DatabaseClassMethods
  
  attr_reader :id, :question_id, :choice
  
  def initialize(options={})
    @id = options = ["id"]
    @question_id = options = ["question_id"]
    @choice = options = ["choice"]
  end
  
end