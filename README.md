# Student Hub - Final Year Project

# Introduction
In this project, we built a web application for students which
will act as a student portal. We used SpringBoot, ReactJS, MongoDB and
Google Firebase as the main frameworks for our web application, user authentication and data storage. We used AWS and DockerHub as our cloud
platforms to deploy the Web Application and GitHub for controlling the
source code and saving our work. The project is written mainly in java and
the react framework and a few other languages such as Javascript and CSS.
Currently, with the times we are in, studying and keeping up with our work
is very challenging. We cannot get access to course materials due to several
reasons, such as little to no face to face contact with lecturers, and college
work is being done all online. A lot of students miss the online lectures due
to bad internet and because of this they may fall behind on their work. Other
students do not even have the opportunity to visit their institute/university
and are not able see any of their peers in person throughout the year. This
is what sparked us and made us think that by making a student portal we
can enhance and help these students with their college work and allow them
to participate with each other. 

This project is a research project as it will allow us to get a better understanding of the work that goes into making a high-end web application. It would also allow us to get a better comprehension of the different languages and frameworks that we will be using. 

The overall objective of this project is to assist students with their online
learning and to make online learning more enjoyable. It will also allow students to reach out to other students through the messaging part of the web
application. First year students who have not been to college do not know
who is in their class or what they look like. The web app will act as a social
media platform which will allow the students to talk to each and get to know
each other. 

# Main Features
- Created a web application using SpringBoot and ReactJS
- Web application contains the necessary components for a website i.e.
About us, Contact page, Footer and a Navbar.
- Users can email us
- Users can use the navbar and sidebar to navigate through the application
- Users can register and create a new account
- Users can safely log in into their account
- Users need to verify a ReCAPTCHA in order to log in
- Users can successfully log out of the application
- Logged in users can access the notepad components and perform CRUD
operations on it.
- Logged in users can access the student forum and post queries and
questions.
- Logged in users can access the messenger component and talk to their
friends and other students on the web app.
- Logged in users can create sticky notes as small reminders of things to
do
- Users are taken to an error page if they input the wrong URL
- The application runs successfully on AWS cloud.
- The application is mobile ready, as the web app is designed to fit any
screen size

# Video Demonstration

We could not cover all features of the website as the screencast was getting too long. In order to access the video, please click the link image below.

[![Foo](https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new.jpg)](https://youtu.be/vBzbadA_kjk)

# Technologies Used
- SpringBoot
- ReactJS
- MongoDB
- Google Firebase
- NodeJS
- Docker
- Amazon Web Services (AWS)
- Atlassian Jira
- Postman
- Robo3T
- GitHub 
- Visual Studio Code
- IntelliJ

# How to run

In order to run the application, you will be required to have docker dowloaded. You can docker from the following link:
```
https://www.docker.com/get-started
https://docs.docker.com/docker-for-windows/install/
```

After downloading docker please run the following commands:

```
git clone https://github.com/sagheerahmadGmit/FinalYearProject
```

```
cd FinalYearProject
```

```
Docker pull Mongo
```

```
docker run -d -p 27017-27019:27017-27019 --name mongo
```
Run the following commands to download docker-compose

```
sudo apt-get update

sudo apt-get upgrade

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-get install docker-ce docker-ce-cli containerd.io

apt-cache madison docker-ce

sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo apt install docker.io

sudo apt install docker-compose
```

```
docker-compose up -d
```

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Authors
- Sagheer Ahmad
- Mateusz Pawlowski

# Acknowledgments
- Martin Hynes 

# Resources
[https://loizenai.com/spring-boot-security-jwt-token-bsed-authentication-example-mysql-spring-jpa-restapis/]

[https://www.baeldung.com/spring-cors]

[https://www.devglan.com/spring-boot/spring-boot-mongodb-configuration]

[https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html]

[https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default]

[https://w3collective.com/react-contact-form/]

[https://bezkoder.com/spring-boot-jwt-auth-mongodb/]

[https://github.com/soumilshah1995/Deploy-Docker-Container-on-AWS/tree/c9dc112320c4e6298d10a6f663d66ff009823040]

[https://www.youtube.com/watch?v=7-KczUt3BbI&ab_channel=KindsonTheTechPro]

[https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs/39357015]

[https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot]
