get "/home" do
  @q1 = Question.find(1)
  @c1 = Choice.find_rows(1)
end

get "/question1_submit" do
  
end