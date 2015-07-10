require 'pry'
require 'sinatra'
require 'sinatra/reloader'

Connection = SQlite3::Database.new('quiz_game.db')

Connection.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question TEXT, answer TEXT);")
Connection.execute("CREATE TABLE IF NOT EXISTS choices (id INTEGER PRIMARY KEY, question_id INTEGER, choice TEXT);")

CONNECTION.results_as_hash = true

require_relative 'models/question.rb'
require_relative 'models/choice.rb'

get "/home" do
  @q1 = Question.find(1)
  @c1 = Choice.find_rows(question_id, 1)
  
  @q2 = Question.find(2)
  @c2 = Choice.find_rows(question_id, 2)
  
  @q3 = Question.find(3)
  @c3 = Choice.find_rows(question_id, 3)
  
  @q4 = Question.find(4)
  @c4 = Choice.find_rows(question_id, 4)
    
  erb :"home"
  
end