
# Coding-Sensei


Coding-sensei est une platform pour apprendre le php ...

### Prerequis

Docker

Skyflow  https://skyflow.io/doc#doc-for-default-module-get-started

## Installation

```
git clone git@github.com:saroumougame/coding-sensei.git
cd coding-sensei
skyflow compose:up ||  docker-compose -f docker/docker-compose.yml up -d
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


```
	
php bin/console doctrine:schema:update --force
php bin/console fos:user:create testuser test@example.com p@ssword
php bin/console fos:user:promote testuser ROLE_READER

```

configurer cle JWT

utiliser coding pour la passphrass

```
mkdir -p var/jwt # For Symfony3+, no need of the -p option
openssl genrsa -out var/jwt/private.pem -aes256 4096
openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem
````

recupere token
```
curl -X POST http://localhost:8089/login_check -d _username=mail@example.com -d _password=p@ssword
```

register

```

http://localhost:8089/api/users

{
       “email”: “chris2@codereviewvideos.com”,
       “username”: “chris2",
       “plainPassword”: “test”,
       “enabled”: true
     }


```

#### React :

dev:

```
cd ./assets
yarn install
yarn run start
```



```

buid:
```
cd ./assets
yarn install
yarn run build
```

