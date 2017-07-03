# js-dev-env-demo-api
API for JS Dev Env Demo in Pluralsight course

'cors' -> enable cross origin calls being that we're calling our Heroku-based API from a different domain than the UI for this app


app.json describes our app to Heroku

Procfile declares the command that Heroku should run

...add in testing, linting, etc....later on after deployment to Heroku

run:

1) heroku login

2) heroku create

Creating app... done, ⬢ pacific-springs-64027
https://pacific-springs-64027.herokuapp.com/ | https://git.heroku.com/pacific-springs-64027.git

3) heroku git:remote -a pacific-springs-64027

returned: set git remote heroku to https://git.heroku.com/pacific-springs-64027.git


4) git push heroku master

returned: remote: Verifying deploy... done.
 https://pacific-springs-64027.herokuapp.com/
To https://git.heroku.com/pacific-springs-64027.git
Register domain name for real app

copy/paste in browser to test if API is working via Heroku:
 https://pacific-springs-64027.herokuapp.com/
 https://pacific-springs-64027.herokuapp.com/user

To make changes:
commit changes as normally would do, then

git push heroku master

...go to UI project and configure it for deployment

.....
