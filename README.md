#Community App

Project Description
South End and Back Bay residents are often complaining about being unable to use their neighborhood parks and recreation and connecting to businesses to the fullest. Residents often run into problems when trying to use the tennis and basketball courts of Titus Sparrow Park because of how full they are. The other issue residents often face is taking their furry loved ones to Carleton Court dog park and no dog is around or worse a dog that doesn’t play well is! Residents shouldn’t need to worry anymore with our web based application, Community! 
Community is an application that allows residents to book times at the courts and inform other dog owning neighbors that they are at the dog park via QR code. Community is also an application for local businesses to connect with its residents by paying to advertise their products and services as well as host events. Community is focused on trying to improve the local Boston area businesses and everyday life for its residents. 

User Stories

As a resident of the South/Back Bay area, I’d like to sign up as a user for Community, so that I can start using the application.
As a tennis player in the South End/Back Bay area, I’d like to reserve a tennis court so that I can play tennis with my friends.
As a basketball player in the South End/Back Bay area, I’d like to reserve a basketball court so that I can play basketball with my friends
As a dog owner in the South End/Back Bay area, I’d like to check in to Carleton Court Dog Park for my dog so that my dog’s friends can see that I am there. 
As a dog owner in the South End/Back Bay area, I’d like to check the crowdedness of the Carleton Court, so that I can decide when I should bring my dog there.
As a dog owner in the South End/Back Bay area, I’d like to check if my dog’s best friends were at the Carleton Court Dog Park, so that I can bring my dog there.
As a local business owner, I should be able to register, and post my event dates that Community users can see.

Goals and Objectives

For (target customers) - Local community around South End and Back Bay area, approximately around 800-1000 active users.
Who (statement of the need or opportunity) - Active residents ( Aiming strongly at Basketball and Tennis players), potentially other sports players, Dog owners, and business owners.
Community is a social networking service. “Community” is mainly used for reserving sport courts, connecting dog owners together, and providing local business to post events.
That (key benefit, compelling reason to buy) -  Active residents and dog owners can benefit from our website in terms of they can manage their time more efficiently throughout the day. Businesses will be able to connect with their local residents and get lifelong customers. 
Unlike (primary competitive alternative) - The two primary competitors are Facebook and Ring’s Neighbors App. Community see’s a potential market advantage over Facebook because Facebook is known for selling user data and not being popular. Community also recognizes an advantage over Ring’s Neighbors App because it’s application has changed from being about a neighborhood to now policing and informing people. There is currently no reservation system in these apps, website or application that helps with the queuing system for public parks in Boston, and we are also using this opportunity to connect different pet (specifically dogs) owners together in a friendly environment.
Our product (statement of primary differentiation) - Our product provides a website where residents can reserve basketball court, tennis court with a time limit of upto 1 hour. We use phone numbers and QR code for verification. Dog owners can also use QR code to access our website on their mobile phone.


# Project Onboarding
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
3. Initilize Amplify: `amplify init`
	* Press 'Y' to use an existing environment
	* Choose 'dev' as your environment
	* Use `amplify pull` to pulled backend environment dev from the cloud to your local machine
4. Other Amplify Commands:
	* `amplify status` will show you what you've added already and if it's locally configured or deployed
	* `amplify add <category>` will allow you to add features like user login or a backend API
	* `amplify push` will build all your local backend resources and provision it in the cloud
	* `amplify console` to open the Amplify Console and view your project status
	* `amplify publish` will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
