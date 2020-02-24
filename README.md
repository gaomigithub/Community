# HealthInsuranceApp

## Introduction

Project Description
Healthcare is one of the most important factors in the United States. It raises many concerns for the citizens including the internationals in America. In 2019 alone, it is a struggle to implement strategies to track the growth of medical and pharmaceutical costs and impacts to access quality of care. People tend to be careless of which healthcare plans bring the most benefits to themselves or their households, since there are always limited choices, which usually based on their company’s options. There are restricted resources web/mobile application to aid a customer to choose the most optimal and suitable plan based on his or her personal condition. We seek to help people to understand by addressing and assuring that people interactions and outcomes are easy, convenient and timely so that their chosen plans on our web/mobile fit naturally of their lifestyle, households and daily activities.

The goal of this project is to create a robust website that is compatible with mobile devices,which will allow any user in the United States and Internationals to purchase premium healthcare packages from US-based healthcare insurance provider. We plan to partner with Insuranceagents across states, get approval on annual rates, and match our clients with three tiers ofhealth care packages alongside varying rates for each package tailoring to their profileinformation. In the health insurance packages section, we will provide the best information abouthealth care access, including access medical and pharmaceutical needs, in the zip code, andprovide health insurance purchase options. People will use our product because we will providefast, reliable, annual health plan plans given their profile. Because we are partnered withaccredited insurance agents, they will sign up with us. In this way, people will save time settingup an appointment with agents and would receive a personalized plan based on their profile.

## Goals and Objectives

- For (target customers) - United States citizens and internationals who seek for a suitablehealthcare plan. We partner with Insurance companies. The private health insurancepremium packages generate nearly trillion or above annually; however, our mainobjective is to provide people with the most affordable insurance rates given their profileinformation
- Who (statement of the need or opportunity) - We are looking to help all people who livein the United States, which include both locals and internationals
- The (product name) is a (product category) - Health Insurance App, an insuranceweb/mobile service application
- That (key benefit, compelling reason to buy) - Online 1-Click Personal Customization,allow users to get their customized insurance plan by details through a simple webpage
- Unlike (primary competitive alternative) - We are giving our users more choices toindicate their current condition, for example, tobacco use. We use the result and dependon our database to connect the user with the most suitable healthcare plan. We alsodifferentiate ourselves from other insurance companies‘ service processing, such as: saving time from tedious communication and misunderstanding with several differentservice agents.
- Our product (statement of primary differentiation) - Provide fast, easy understandablepersonalized plans offered to a different category of the group to get access to healthcare

## Features List:

1. Landing page with two options : Enter Zip Code, GetQuote button, Contact us page
2. User information page on MyHealth Plan:
   - Date of Birth, Gender, Height, Weight, Tobacco Use
   - Sign up for getting a quote using the home address and phone number
3. Page that provides premium plans of three tiers(bronze, silver, diamond) of partneredhealth insurances based on the age group and subsequent features
4. Provide information on what health care they get in three tiers: access to the type ofdoctors in the area; access to the emergency room of the hospital in the area; access tothe pharmacy
5. Client select any premium choices, attach their valid passport, attested medical history,other insurance forms, and then make a purchase using Stripe
6. We forward the request to the Insurance Company for a client insurance card andprovide a temporary PDF Insurance Card in compliance with the Insurance Company.The client is happy and goes to the doctor for treatment or Pharmacy

# Initial Project Onboarding

1. If you don't have Homebrew please install it: https://brew.sh/
2. After following the instructions for Homebrew. Install Node Version Manager. In the terminal write: `brew install nvm`
   - Install node version 12.0.0: `nvm install 12.0.0`
   - If you have errors in the terminal reach out to Linc Kupke
3. Install `yarn` globally
   - `npm install -g yarn`
4. Clone the project
5. Change directory `cd frontend`
6. Install the libraries: `yarn`
7. Start the React app: `yarn start`

# How to create a new branch once project is on computer

1. Go to the root of the project
2. Switch to the development branch: `git checkout development`
3. Pull down new code: `git pull`
4. Create a new branch: `git checkout -b feature/BranchName`
5. Make code changes and commit and push them.

# Set-up Amplify as Development User

1. Locate to the working branch and install Amplify CLI: `npm install -g @aws-amplify/cli`
2. Configure Amplify as a development user: `amplify configure`

   - Press Enter to **skip the sign in**
   - Specify AWS region (we are using **us-east-1**)
   - Enter your IAM username created by administrator @LmKupke
   - Press Enter again to **skip the sign in**
   - Enter the access key id provided by administrator
   - Enter the secret access key provided by administrator
   - Create the AWS profile name in your local machine

3. Other Amplify Commands:

   - `amplify status` will show you what you've added already and if it's locally configured or deployed
   - `amplify add <category>` will allow you to add features like user login or a backend API
   - `amplify push` will build all your local backend resources and provision it in the cloud
   - `amplify console` to open the Amplify Console and view your project status
   - `amplify publish` will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

REACT piece:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
