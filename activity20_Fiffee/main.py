from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABSSE_URI']='postgres:wbdnvz36@localhost/demoDB'
db=SQLAlchemy(app)

#define db model. create a table in our demoDB
class Data(db.Model):
    __tablename__ = "data"
    id=db.Column(db.Integer, primary_key = True)
    email_=db.Column(db.String(120), unique = True)

    def __init__(self, email):
        self.email = email

#homepage when application is ran
@app.route("/")
def hello():
    return render_template("index.html")

#handle homepage when form is submitted
#request.method == POST is collecting the data of the form when the form is submitted
@app.route("/", methods=["POST"])
def thankyou():
    if request.method == "POST":
        email = request.form["email_name"]
        print(request.form)
    #last step: commit
    data = Data(email)
    db.session.add(data)
    db.session.commit() # execute the data into databasr

    return render_template("thankyou.html")


@app.route("/about")
def aboutUs():
    return "<h1>About Us</h1>"

if __name__ =="__main__":
    app.run()
    app.debug=True
