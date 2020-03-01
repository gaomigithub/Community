# Community Web Application
## Introduction

Project Description
South End and Back Bay residents are often complaining about being unable to use their neighborhood parks and recreation and connecting to businesses to the fullest. Residents often run into problems when trying to use the tennis and basketball courts of Titus Sparrow Park because of how full they are. The other issue residents often face is taking their furry loved ones to Carleton Court dog park and no dog is around or worse a dog that doesn’t play well is! Residents shouldn’t need to worry anymore with our web based application, Community! 


Community is an application that allows residents to book times at the courts and inform other dog owning neighbors that they are at the dog park via QR code. Community is also an application for local businesses to connect with its residents by paying to advertise their products and services as well as host events. Community is focused on trying to improve the local Boston area businesses and everyday life for its residents. 



## Goals and Objectives

* For (target customers) - Local community around South End and Back Bay area, approximately around 800-1000 active users.
* Who (statement of the need or opportunity) - Active residents ( Aiming strongly at Basketball and Tennis players), potentially other sports players, Dog owners, and business owners.
Community is a social networking service. “Community” is mainly used for reserving sport courts, connecting dog owners together, and providing local business to post events.
* That (key benefit, compelling reason to buy) -  Active residents and dog owners can benefit from our website in terms of they can manage their time more efficiently throughout the day. Businesses will be able to connect with their local residents and get lifelong customers. 
* Unlike (primary competitive alternative) - The two primary competitors are Facebook and Ring’s Neighbors App. Community see’s a potential market advantage over Facebook because Facebook is known for selling user data and not being popular. Community also recognizes an advantage over Ring’s Neighbors App because it’s application has changed from being about a neighborhood to now policing and informing people. There is currently no reservation system in these apps, website or application that helps with the queuing system for public parks in Boston, and we are also using this opportunity to connect different pet (specifically dogs) owners together in a friendly environment.
* Our product (statement of primary differentiation) - Our product provides a website where residents can reserve basketball court, tennis court with a time limit of upto 1 hour. We use phone numbers and QR code for verification. Dog owners can also use QR code to access our website on their mobile phone.

## Features List:
1. Landing page
2. Signup/Signin page for Resident
3. Signup/Signin page for Business
4. A profile page for user
5. A profile page for a Business
6. A profile page for dog (if the user owns a dog)
7. Provide four services
	* reserve/check available of the basketball court
	* reserve/check available of the tennis court
	* Check in at the dog park
	* Check who’s (dog) at the dog park on the particular time
	* Allow a business to post an event

## Additional Features:
1. Setup play dates between dogs for Carleton Court
2. Adding Peter’s Park dog park as part of checking in
3. Adding other recreational parks in the Boston area



# Initial Project Onboarding
1. If you don't have Homebrew please install it: https://brew.sh/
2. After following the instructions for Homebrew. Install Node Version Manager. In the terminal write: `brew install nvm`
    * Install node version 12.0.0: `nvm install 12.0.0`
    * If you have errors in the terminal reach out to Linc Kupke
3. Install `yarn` globally
    * `npm install -g yarn`
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
	* Press Enter to **skip the sign in**
	* Specify AWS region (we are using **us-east-1**)
	* Enter your IAM username created by administrator @LmKupke 
	* Press Enter again to **skip the sign in**
	* Enter the access key id provided by administrator
	* Enter the secret access key provided by administrator
	* Create the AWS profile name in your local machine
3. Get the most updated environment from amplify: `amplify pull --appId d3krgafvw1yhrp --envName dev`
4. Create new Amplify environment for adding features:
	* Create new environment: `amplify env add`
	* ? Do you want to use an existing environment? No
	* ? Enter a name for the environment <your environment> (lower case alphabets only, 10 letters max)
	* Do you want to use an AWS profile? Yes (choose the AWS profile you just created)
	* Make sure you are in your new environment, use `amplify push` to update your environment
5. Other Amplify Commands:
	* `amplify status` will show you what you've added already and if it's locally configured or deployed
	* `amplify add <category>` will allow you to add features like user login or a backend API
	* `amplify push` will build all your local backend resources and provision it in the cloud
	* `amplify console` to open the Amplify Console and view your project status
	* `amplify publish` will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

    
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
