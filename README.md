# Rave By Flutterwave React Native Component
This is the react native SDK for Rave By [Flutterwave.](https://rave.flutterwave.com)

<img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/rnapp.png" style="text-align: center; max-height: 400;" alt="Rave React Native App">

<img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/GhMoney-Mpesa.png" style="text-align: center; max-height: 400;" alt="Mobile Money and Mpesa">

<img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1544536889/rave-react-native/Uganda_Mobile_Money.png" style="text-align: center; max-height: 400;" alt="Uganda Mobile Money">

## Table Of Content

- [Getting Started](#getting-started)
- [Installations](#installations)
- [Deployment](#deployment)
- [How It Works](#how-it-works)
- [Payment Options](#payment-options)
- [Usage](#usage)
- [Parameters Table](#parameters-table)
- [Setting Up a Simple Webhook with NodeJs and ngrok to receive Rave Webhook request](#setting-up-a-simple-webhook-with-nodejs-and-ngrok-to-receive-rave-webhook-request)
- [Contributions](#contributions)

## Getting Started

### Prerequisites

- [Rave Test Public And Private Keys](https://ravesandbox.flutterwave.com/dashboard/settings/apis)
- [Rave Live Public And Private Keys](https://rave.flutterwave.com/dashboard/settings/apis)
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [React Native](https://facebook.github.io/react-native/docs/getting-started.html)


## Installations

> To use rave react native SDK in your application, you need to have `Node` and `npm` downloaded and installed on your machine.

- [Click Here](https://nodejs.org/en/) to download and install `Node` to your machine, `npm` is always automatically installed when you install `Node`.

- To ensure you have `Node` and `npm` installed, enter the following command into your terminal/command prompt `node -v` and `npm -v` respectively.

- To run `react native` on your machine you can use `npm install -g expo-cli` to install [Expo CLI](https://expo.io/) a command line utility to get you started quickly or use this command `npm install -g react-native-cli` to install the [react native CLI](https://facebook.github.io/react-native/docs/getting-started.html).

## Deployment

> To Implement Rave By Flutterwave easily with React Native

- Go to [Flutterwave Rave Live](https://rave.flutterwave.com/dashboard/settings/apis) to get your **`LIVE`** public and private key
- Go to [Flutterwave Rave Test](https://ravesandbox.flutterwave.com/dashboard/settings/apis) to get your **`TEST`** public and private key

`NOTE: ` Set the production option to `true` or `false` depending on your deployment environment.

## How It Works

This is a simple demonstration of how to set up a simple react native app and integrate `rave react native SDK` into it.

Using the [Expo CLI](https://expo.io/) command line utility, Enter the following command to get started:

  - `expo init AwesomeProject`
  - `cd AwesomeProject`
  - `npm start`

- You should get this from your terminal:

<p align="center">
  <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752765/rave-react-native/expo-barcode.png" style="max-height: 400;" alt="Expo Terminal Image">
</p>

- Install the Expo client or mobile application from [Apple Store](https://itunes.apple.com/app/apple-store/id982107779) or [Playstore](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

- Open the Expo client app you installed on your mobile phone, then scan the barcode displaying on the terminal on your PC.

- If successfully scanned and built, your app should load up on your mobile phone with the result in the image below;

<p align="center">
<img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/app-working.png" style="max-height: 400;" alt="React Native Test UI">
</p>

### Integrating Rave React Native

You can pull in react-native-rave into app with the steps below;

- Change directory into your current project directory from your terminal and enter this command:
  > npm install react-native-rave --save
  ### OR
  > yarn add react-native-rave

<p align="center">
  <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/npm-install-rave.png" style="max-height: 150;" alt="npm-install-rave image">
<p>

  `Note:` To use `Yarn` on your machine [Click Here](https://yarnpkg.com/en/docs/install)

  Next use any of the payment options by following the processes  [below](#payment-options).


## Payment Options

### The payment options includes:
- Card Payments
- Account Payments
- Mpesa 
- Ghana Mobile Money Payments
- Uganda Mobile Money Payments
- USSD Payments


## Usage

### Card Payments

#### 1.  import Rave Component 

```javascript
import Rave from 'react-native-rave';
```

#### 2. Set your success and failure methods

```javascript
 constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(data) {
    console.log("success", data);

  }

  onFailure(data) {
    console.log("error", data);
  }
```

#### 3. Use component with the card payment props

```javascript
render() {
  return (
    <Rave 
        amount="500" 
        country="NG" 
        currency="NGN" 
        email="test@mail.com" 
        firstname="Oluwole" 
        lastname="Adebiyi" 
        publickey="FLWPUBK-**************************-X" 
        secretkey="FLWSECK-**************************-X"
        paymenttype="card" // or set to both for card and account transactions
        page="card"
        meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
        production={false} 
        onSuccess={res => this.onSuccess(res)} 
        onFailure={e => this.onFailure(e)}
        />
  );
}
```

### Account Payments

#### 1.  import Rave Component 

```javascript
import Rave from 'react-native-rave';
```

#### 2. Set your success and failure methods

```javascript
 constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(data) {
    console.log("success", data);

  }

  onFailure(data) {
    console.log("error", data);
  }
```

#### 3. Use component with the account payment props

```javascript
render() {
  return (
    <Rave 
        amount="500" 
        country="NG" 
        currency="NGN" 
        email="test@mail.com" 
        firstname="Oluwole" 
        lastname="Adebiyi" 
        publickey="FLWPUBK-**************************-X" 
        secretkey="FLWSECK-**************************-X"
        paymenttype="account" // or set to both for card and account transactions
        page="account"
        meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
        production={false} 
        onSuccess={res => this.onSuccess(res)} 
        onFailure={e => this.onFailure(e)}
        />
  );
}
```

### Mpesa

`Note:` Rave currently allows merchants use two (2) payment methods in Kenya (card and Mpesa).

#### 1.  import Rave Component 

```javascript
import Rave from 'react-native-rave';
```

#### 2. Set your success and failure methods

```javascript
 constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(data) {
    console.log("success", data);

  }

  onFailure(data) {
    console.log("error", data);
  }
```

#### 3. Use component with the mpesa payment props

```javascript
render() {
  return (
    <Rave 
        amount="10" 
        country="KE" 
        currency="KES" 
        email="test@mail.com" 
        firstname="Oluwole" 
        lastname="Adebiyi" 
        publickey="FLWPUBK-**************************-X" 
        secretkey="FLWSECK-**************************-X"
        paymenttype="mpesa" // or set to both for card and mpesa transactions
        page="mpesa"
        meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
        production={false} 
        onSuccess={res => this.onSuccess(res)} 
        onFailure={e => this.onFailure(e)}
        />
  );
}
```
### Ghana Mobile Money

`Note:` Rave currently allows merchants use two (2) payment methods in Ghana (card and mobilemoney)

#### 1.  import Rave Component 

```javascript
import Rave from 'react-native-rave';
```

#### 2. Set your success and failure methods

```javascript
 constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(data) {
    console.log("success", data);

  }

  onFailure(data) {
    console.log("error", data);
  }
```

#### 3. Use component with the Ghana Mobile Money payment props

```javascript
render() {
  return (
    <Rave 
        amount="10" 
        country="GH" 
        currency="GHS" 
        email="test@mail.com" 
        firstname="Oluwole" 
        lastname="Adebiyi" 
        publickey="FLWPUBK-**************************-X" 
        secretkey="FLWSECK-**************************-X"
        paymenttype="mobilemoneygh" // or set to both for card and mobile money transactions
        page="mobilemoneygh"
        meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
        production={false} 
        onSuccess={res => this.onSuccess(res)} 
        onFailure={e => this.onFailure(e)}
        />
  );
}
```

### Uganda Mobile Money

`Note:` Rave currently allows merchants use two (2) payment methods in Uganda (card and uganda mobile money)

#### 1.  import Rave Component 

```javascript
import Rave from 'react-native-rave';
```

#### 2. Set your success and failure methods

```javascript
 constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(data) {
    console.log("success", data);

  }

  onFailure(data) {
    console.log("error", data);
  }
```

#### 3. Use component with the Uganda Mobile Money payment props

```javascript
render() {
  return (
    <Rave 
        amount="10" 
        country="NG" 
        currency="UGX" 
        email="test@mail.com" 
        firstname="Oluwole" 
        lastname="Adebiyi" 
        publickey="FLWPUBK-**************************-X" 
        secretkey="FLWSECK-**************************-X"
        paymenttype="mobilemoneyuganda" // or set to both for card and uganda mobile money transactions
        page="mobilemoneyuganda"
        meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
        production={false} 
        onSuccess={res => this.onSuccess(res)} 
        onFailure={e => this.onFailure(e)}
        />
  );
}
```

### USSD Payments

`Note:` This is still in development.


## Parameters Table

| props        | parameter           | type | required  |
| ------------- |:-------------:| -----:| -----:|
| publickey      |  This is the publickey gotten from your [Live](https://rave.flutterwave.com/dashboard/settings/apis) or [Test](https://ravesandbox.flutterwave.com/dashboard/settings/apis) dashboard | `String` | Required
| secretkey      |  This is the secretkey gotten from your [Live](https://rave.flutterwave.com/dashboard/settings/apis) or [Test]
| amount      |  This is the amount to be charged from card/account | `String` | Required
| email      |  This is the email of the customer | `String` | Required
| phone      |  This is the phone number of the customer | `String` | Not Required
| firstname      |  This is the firstname of the customer | `String` | Required
| lastname      |  This is the lastname of the customer | `String` | Required
| onSuccess      |  This is the function that receives data for a successful transaction | `Function` | Required
| onFailure      |  This is the function that receives data for a failed transaction | `Function` | Required
| country      |  This is the country you are transacting from eg. NG, GH,KE, ZA | `String` | Not Required (defaults to NG)
| currency      |  This is the currency you want to charge the customer eg. NGN, GHS, KES, UGX, USD, GBP, ZAR | `String` | Not Required (defaults to NGN)
| txref      |  This is a unique reference for the transaction | `String` | Not Required (will be generated automatically)
| primarycolor      |  This is to override the primary colour of the component | `String` | Not Required
| secondarycolor      |  This is to override the secondary colour of the component | `String` | Not Required
| paymenttype      |  This is the payment type ['both','card', 'account', 'mpesa', 'mobilemoneygh', 'mobilemoneyuganda'] | `String` | Required ('if non set, it sets a default payment type to both')
| page      |  This sets the current state of payment page based on the payment type currently implemented ['both','card', 'account', 'mpesa', 'mobilemoneygh', 'mobilemoneyuganda']  | `String` | Required ('If no value is set, card page is set by default')
| production      |   Set to `true` if you want your transactions to run in the production environment otherwise set to `false`. Defaults to false  | `Boolean` | Not Required ('defaults to false')
| meta      |  This is additional information that can be sent to the server eg [{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]  | `Array of Objects` | Not Required


## `NOTE:`

 <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1544537282/rave-react-native/Issues.png" style="max-height: 400;" alt="React Native Version Issues">
  </p>


### If you encounter any of the error above when trying to load the rave react native SDK in your App, it is occurs in newer versions of react native.

> ### FIX:
- To fix the issue, simply open your react native app node modules folder and locate rave react native module.
- Next thing you need to do is to locate the node modules folder inside the rave react native module folder.
- After locating it, Simply delete it and the issue would be resolved.

### See Screenshots Below:

 <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1544536606/rave-react-native/Error_Fix.png" style="max-height: 400;" alt="React Version Issues Fix">
  </p>


## Setting Up a Simple Webhook with NodeJs and ngrok to receive Rave Webhook request

#### `Note:` You might need to set up a webhook for all your transactions but mostly for mpesa and ghana mobile money to receive webhook request from Rave to verify transactions that occurs on your mobile application.

- Ensure you have `node` and `npm`, if not [refer to this for guide](#installation).
- Next register and download `ngrok` [here](https://ngrok.com/download).
- Extract the downloaded `ngrok` zip file.
- Set your extracted ngrok file to be globally available i.e set it to the environment variable by following this steps:
  - For Windows Users - On the search box on the taskbar of your desktop, search for System (control panel).
  - Click the advanced settings and then click on the environment settings, like this:

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/env-variable.png" style="max-height: 400;" alt="Environment variable settings">
  </p>

  - Next copy the ngrok file path and add it to the enviroment variable by selecting the path option and clicking on the edit option like this: 

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/ngrok-settings.png" style="max-height: 400;" alt="Adding ngrok to the environment variable">
  </p>

- For MacOS users, to have ngrok up and running on your machine, follow the process:
  - Download `ngrok` [here](https://ngrok.com/download)
  - Extract/Unzip it to your Applications directory
  - Create a symlink to ngrok with this commands from your terminal:
    -  cd into your local bin directory

        `cd /usr/local/bin`
    - create symlink
    
    `ln -s /project/ngrok ngrok`
    - now cd into your project directory and reference it like this from you terminal
    - /project/ngrok `[your-port-number]`

- To ensure this successfully done, enter the command `ngrok -v` in your Terminal, it should return the version of ngrok you are currently running.

- Next create a new project directory, change directory into it and create a new project file like this:

  - `mkdir test-webhook`
  - `cd test-webhook`
  - `touch app.js`
- Next run `npm init` command to initialize your package.json file
- From your project directory install the following `npm` dependencies:

  - `npm install body-parser --save`
  - `npm install express --save`
  - `npm install express-winston --save`
  - `npm install winson --save`
  - `npm install -g nodemon` - an npm package for debugging node applications.

  Or Simply: `npm install body-parser express express-winston winston --save`

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/npm-packages.png" style="max-height: 400;" alt="Adding ngrok to the environment variable">
  </p>


- Next we add the following code into our `app.js` file.

```

'use strict';

var express = require('express'); // required to create http server

var bodyParser = require('body-parser'); // required to parse incoming request bodies

var app = express().use(bodyParser.json()); // creates http server

var winston = require('winston'); // data logger

var expressWinston = require('express-winston'); // required to create middleware that log http requests

expressWinston.requestWhitelist.push('body');

var port = process.env.PORT || 3000 // setting the port the server should listen to

process.env.SECRET_HASH = "your-rave-secret-hash" // making the secret hash you set in your dashboard available to the environment variable

app.set('port', port);


/*

using expressWinston to parse webhook http requests to display in the console 
and also write into a .txt file called combined.log.

*/

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'combined.log',
            level: 'info'
        })
    ]
}));


//  Set the port the server is listening to 

app.listen(port, () => console.log('Webhook is listening to port: ' + port));

app.get('/', (req, res) => res.send('Hello World!'))


/* 

Set your webhook url that will be listening for webhook requests from rave server,
This is required to receive requests from rave server, verify the data received from the server 
and give your customer value.

*/

app.post("/webhook-url", function (req, res) {
    /* It is a good idea to log all events received. Add code *
     * here to log the signature and body to db or file       */

    // retrieve the signature from the header
    var hash = req.headers["verif-hash"];

    if (!hash) {
        // discard the request,only a post with rave signature header gets our attention 
        res.send({
            status: "error"
        });
        process.exit(0)
        // console.log("no hash sent");
    }

    // Get signature stored as env variable on your server
    const secret_hash = process.env.SECRET_HASH;

    // check if signatures match

    if (hash !== secret_hash) {
        // silently exit, or check that you are passing the write hash on your server.
        res.send({
            status: "error"
        });
        process.exit(0)
        // console.log("has is not equal sent");
    }

    // Retrieve the request's body
    var request_json = req.body;

    // Give value to your customer but don't give any output
    // Remember that this is a call from rave's servers and 
    // Your customer is not seeing the response here at all

    res.send(200);
});

```
- Now let's make our webhook url from our local server available to public on the internet with `ngrok`, we are using this method for this project.
  `Note:` This can also be achieved by making your webhook url available to live cloud services like `heroku`, `AWS`, `netlify` and `so on`.

- First we need to login to your [`ngrok`](#https://dashboard.ngrok.com/user/login) dashboard to get your authorization token, from here:

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752763/rave-react-native/ngrok-dashboard-auth.png" style="max-height: 400;" alt="ngrok authorization token">
  </p>

- Then from the terminal change directory into the project directory and run the following command:
  - `ngrok authtoken <your-authorization-token>` 
  - `ngrok http <the-port-number-your-node-app-is-listening-to>`

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752763/rave-react-native/ngrok-auth.png" style="max-height: 400;" alt="ngrok-auth-token">
  </p>

- If successfully setup, your webhook url should be up live with this result: 

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/ngrok-start.png" style="max-height: 400;" alt="ngrok-start">
  </p>

- Now we add our webhook url to our rave dashboard here:

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/rave-webhook-url.png" style="max-height: 400;" alt="rave-webhook-url">
  </p>

- Then from the terminal we need to run `nodemon app.js` to start our application and ensure it is listening to the port like this:

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752764/rave-react-native/nodemon-listening.png" style="max-height: 400;" alt="nodemon listening">
  </p>
- Our webhook is now up and running to receive webhook requests from rave.

### Example of a Webhook request sent by `Rave` to our Node App running on ngrok from a Ghana Mobile Money Transaction

  <p align="center">
    <img src="https://res.cloudinary.com/flutterwavedeveloper/image/upload/v1540752765/rave-react-native/webhook-req.png" style="max-height: 400;" alt="webhook-request">
  </p>


## Contributions

- You can contribute to this project by forking it.
- In case of any found bug, you are welcome to report the issue or fix and send a PR.



