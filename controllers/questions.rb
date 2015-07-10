get "/home" do
  # @q1 = Question.find(1)
 #  @c1 = Choice.find_rows("question_id", 1)
 #
 #  @q2 = Question.find(2)
 #  @c2 = Choice.find_rows("question_id", 2)
 #
 #  @q3 = Question.find(3)
 #  @c3 = Choice.find_rows("question_id", 3)
 #
 #  @q4 = Question.find(4)
 #  @c4 = Choice.find_rows("question_id", 4)
 
 @question  = Question.all
 @choice = Choice.all
    
  erb :"home"
  
end