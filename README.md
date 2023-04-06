# Tech Blog CMS

This is a CMS-style blog site for developers who want to publish articles, blog posts, and their thoughts and opinions. The site includes features such as user registration, authentication, post creation, update and deletion, commenting, and session management.

## Getting Started

###Prerequisites
- Node.js (version 14 or higher)
- MongoDB (version 4.4 or higher)

Installation
1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/tech-blog-cms.git
```
2. Install the dependencies:

```
cd tech-blog-cms
npm install
```
3. Create a .env file in the root directory of the project and add the following environment variables:

```
MONGODB_URI=<your-mongodb-uri>
SESSION_SECRET=<your-session-secret>
```

Replace <your-mongodb-uri> with the connection string for your MongoDB database, and <your-session-secret> with a secret string for session management.

## Usage
1. Start the server:

```
npm start
```

2. Open your web browser and go to http://localhost:3000.

3. You will be presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

4. Click on the "Sign up" link to create a new user account.

5. Once you have signed up, you will be redirected to the homepage, where you can view existing blog posts and leave comments.

6. Click on the "Dashboard" link to create new posts or edit existing ones.

7. When you are finished, click on the "Logout" link to sign out of the site.

