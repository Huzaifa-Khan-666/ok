from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    """Render the home page."""
    return render_template('index.html', title='DevOps Engineer Portfolio')

@app.route('/about')
def about():
    """Render the about page."""
    return render_template('about.html', title='About Me')

@app.route('/skills')
def skills():
    """Render the skills page."""
    return render_template('skills.html', title='My Skills')

@app.route('/projects')
def projects():
    """Render the projects page."""
    return render_template('projects.html', title='My Projects')

@app.route('/contact')
def contact():
    """Render the contact page."""
    return render_template('contact.html', title='Contact Me')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)