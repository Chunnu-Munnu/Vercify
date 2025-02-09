from flask import Flask
from flask_cors import CORS
from waitress import serve

app = Flask(__name__)
CORS(app)

import routes

if __name__ == "__main__": # if check is necessary to make sure app only runs in the specific file
    serve(app,host="0.0.0.0",port=5000)
    #app.run(debug=True)