require 'pry'
require 'sinatra'
require 'sinatra/reloader'

Connection = SQlite3::Database.new('quiz_game.db')

Connection.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question TEXT, answer TEXT);")
Connection.exeCute("CREATE TABLE IF NOT EXISTS choices (id INTEGER PRIMARY KEY, question_id INTEGER, choice TEXT);")

CONNECTION.results_as_hash = true

require_relative 

get "/home" do
  @questions = Question.all
  
  erb :"home"
  
end