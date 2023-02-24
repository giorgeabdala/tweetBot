# 🕊 Twitter Engagement Bot

A bot that automatically likes tweets that contain certain keywords, replies to tweets, and replies random Gm and Gn to tweets and much more...



## 🧪 Setup
 
1. Clone this repository
2. Install node.js v16.14.1 (https://nodejs.org/download/release/v16.14.1/)
3. run `npm install` in the directory
4. run `npm start` to start the bot


## 📐 Configuration

The bot is configured using config.json:

* `username` - The username of the account to use (optional)
* `password` - The password of the account to use (optional)
* `search` - An array of keywords to search for'
* `action` - An array of actions to perform
* `cycles` - The number of times to perform the actions


## ✨ Features

* Automatically like tweets that contain certain keywords
* Automatically reply random Gm and Gn to tweets
* Automatically reply to tweets that contain certain keywords
* Automatically follow users that tweet certain keywords
* Automatically await 3 hours before doing the next action
