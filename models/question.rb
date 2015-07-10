require_relative "database_class_methods"
require_relative "database_instance_methods"

class Question
  
  include DatabaseInstanceMethods
  extend DatabaseClassMethods
  
  attr_reader :id, :question, :answer
  
  def initialize(options={})
  @id = options["id"]
  @question = options["question"]
  @answer = options["answer"]
  end
  
end