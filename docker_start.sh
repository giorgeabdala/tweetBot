git pull
docker stop tweetBot
docker rm tweetBot
docker build -t giorgeabdala/tweetbot .
docker run  --name tweetBot -d giorgeabdala/tweetbot

