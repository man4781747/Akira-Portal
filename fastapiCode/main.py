from flask import Flask
from flask import render_template
import os
app = Flask(__name__, template_folder="./template",static_folder='./static')

@app.route("/")
@app.route("/AboutMe")
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8998)