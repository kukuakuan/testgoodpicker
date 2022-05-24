# goodpicker
## Download 
```
git clone https://gitlab.com/kukuakuan/goodpicker.git
git checkout dev
```
## Install

### 1. Backend

- python3
- pipenv  
  `sudo pip3 install pipenv`
- virtualenv  
  `sudo pip3 install virtualenv`
- pew  
  `sudo pip3 install pew`
```
pipenv shell
pipenv install
```
### 2. Frontend
- nodejs 
 ```
 sudo apt update
 sudo apt install nodejs
 ```
- npm 
 `sudo apt install npm`
- yarn 
 `sudo npm i -g yarn`
```
cd frontend
yarn
```

## Start

### 1. Backend
**At project root**
```
pipenv shell
cd backend
python manage.py runserver
```
**Add Province**
- can do in all terminal
```
sudo apt install sqlite3
sqlite3  db.sqlite3
.tables //Check is that database
.mode csv
.import test.csv goodpick_province
select * from goodpick_province; //check result
.exit //quit sql
```
```
python manage.py migrate
python manage.py runserver
```

### 2. Frontend

```
cd frontend
npm start
```
