## XAuth - Improving Privacy for Web Applications

Privacy is the focus of how the system should be built on top of OAuth. Taking inspiration from Facebook anonymous login, the framework should tell the client(application) whether the user is authorized to access a particular resource without revealing any user details. A specific example that would be developed is a news site where the framework tells the website whether the user is a paid subscriber or not. In this case no personal information of the user is given to the website. The code idea is to provide the anonymity feature that OAuth currently does not have but should have. This would allow users to choose for more privacy focused login methods and would be helpful for authentication/authorization methods that do not give away any private information. Some other use cases could also be formulated apart from the news site such as online courses sites. 

### Auth Server Setup 

To Install all the dependencies through NPM:

`npm install`

To deploy to Google Cloud:

`gcloud functions deploy auth --runtime nodejs8 --trigger-http`

`gcloud functions deploy signin --runtime nodejs8 --trigger-http`

`gcloud functions deploy token --runtime nodejs8 --trigger-http`