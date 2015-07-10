CONNECTION = SQLite3::Database.new("quiz-game.db")

CONNECTION.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question TEXT, answer TEXT);")
CONNECTION.execute("CREATE TABLE IF NOT EXISTS choices (id INTEGER PRIMARY KEY, question_id INTEGER, choice TEXT);")

CONNECTION.results_as_hash = true