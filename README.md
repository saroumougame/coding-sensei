
# Coding-Sensei


Coding-sensei est une platform pour apprendre le php ...

### Prerequis

nodejs - npm

## Installation

```
git clone https://github.com/saroumougame/coding-sensei.git
cd coding-sensei
cd assets
npm run start
Your app is running on localhost port 3000

```

## Travis 

```
.travis.yml
```

## Production 

### https://coding-sensei.fr


```
git pull https://github.com/nicolasdet/coding-prod.git developpement
Merge master into origin2\developpement

```

### Test Fonctionel Behat + selenium

```
java -Dwebdriver.gecko.driver=/usr/local/bin/geckodriver -jar selenium-server-standalone-3.0.1.jar

./vendor/bin/behat --init

./vendor/bin/behat

```

