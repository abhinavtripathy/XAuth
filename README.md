## XAuth - Improving Privacy for Web Applications
[![Build Status](https://travis-ci.org/abhinavtripathy/XAuth.svg?branch=master)](https://travis-ci.org/abhinavtripathy/XAuth)
[![License](http://img.shields.io/badge/License-MIT-brightgreen.svg)](./LICENSE)
[Design Document](https://docs.google.com/document/d/1risPVaKwMGAxjHQHAPwbsZ5wf7VXmoseCP-FbvIDilA/edit?usp=sharing)

Traditionally the OAuth protocol has had no specific privacy preserving mechanisms or options to help users not give away their private information or try to stay anonymous on services. XAuth is an implementation of OAuth that tries to preserve user's privacy while still giving the third party application an anonymous hashed ID to which the application associated all the user attributes to. A specific example of this is a news site who doesn't need to know you are but needs to know attributes such as paid or unpaid subscriber. Some more upcoming features of XAuth include having the ability to share your information if the user feels they want to share their information and also being able to choose what part of their information can be shared such as name, age, email. 

XAuth also has a mail proxy server hosted on the identity provider end to proxy email requests from the application to the user to allow for a higher level of security and anonymity. 

<!-- 
### Auth Server Setup 

To Install all the dependencies through NPM:

`npm install`

To deploy to Google Cloud:

`gcloud functions deploy auth --runtime nodejs8 --trigger-http`

`gcloud functions deploy signin --runtime nodejs8 --trigger-http`

`gcloud functions deploy token --runtime nodejs8 --trigger-http`


To test the functions:

`https://[gcp-region]-[project-name].cloudfunctions.net/token`

`https://[gcp-region]-[project-name].cloudfunctions.net/signin`

`https://[gcp-region]-[project-name].cloudfunctions.net/auth` -->
