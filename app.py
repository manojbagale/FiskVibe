from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/login', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Add your authentication logic here (e.g., check username and password in a database)
        if username == "testuser" and password == "testpass":  # Example check
            return redirect(url_for('landing'))
        else:
            return "Invalid credentials. Please try again."
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
