require 'pry'
require 'sinatra'
require 'sinatra/reloader'

require 'sqlite3'
require_relative 'database_setup.rb'

require_relative 'models/question.rb'
require_relative 'models/choice.rb'

require_relative 'controllers/questions.rb'
