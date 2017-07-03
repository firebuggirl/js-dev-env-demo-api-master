# js-dev-env-demo-api
API for JS Dev Env Demo in Pluralsight course

'cors' -> enable cross origin calls being that we're calling our Heroku-based API from a different domain than the UI for this app


app.json describes our app to Heroku

Procfile declares the command that Heroku should run

...add in testing, linting, etc....later on after deployment to Heroku

run:

1) heroku login

2) heroku create


Creating app... done, ⬢ limitless-beach-93044
https://limitless-beach-93044.herokuapp.com/ | https://git.heroku.com/limitless-beach-93044.git

3) heroku git:remote -a limitless-beach-93044

returned:

set git remote heroku to https://git.heroku.com/limitless-beach-93044.git


4) git push heroku master

returned: remote: Verifying deploy... done.
  https://limitless-beach-93044.herokuapp.com/
To https://git.heroku.com/limitless-beach-93044.git
Register domain name for real app

copy/paste in browser to test if API is working via Heroku:
  https://limitless-beach-93044.herokuapp.com/
  https://limitless-beach-93044.herokuapp.com/user
 

To make changes:
commit changes as normally would do, then

git push heroku master

...go to UI project and configure it for deployment

.....
