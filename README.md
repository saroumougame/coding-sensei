
# Coding-Sensei


Coding-sensei est une platform pour apprendre le php ...

### Prerequis

Docker

Skyflow  https://skyflow.io/doc#doc-for-default-module-get-started

## Installation

```
git clone git@github.com:saroumougame/coding-sensei.git
cd coding-sensei
skyflow compose:up 
skyflow compose:composer:run "composer update"
skyflow compose:symfony:sh
bin/console doctrine:database:create --if-not-exists // penser a conf le .env

```



### Local Environment

- App URL : http://localhost:8889/
- MariaDB url: 0.0.0.0:3306
- Db : coding 
- user : coding
- mdp : coding
- DATABASE_URL=mysql://coding:coding@0.0.0.0:3306/coding


## Commande Utile

#### Symfony :
```
skyflow compose:symfony:sh  // Acces au container symfony 

bin/console doctrine:database:create --if-not-exists // Cree la BD

bin/console doctrine:schema:update --force // Update la BD

```


#### React :

dev:

```
cd ./assets
yarn install
yarn run start
```

buid:
```
cd ./assets
yarn install
yarn run build
```
