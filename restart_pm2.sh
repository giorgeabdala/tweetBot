 #sudo env PATH=$PATH:/home/abdala/.nvm/versions/node/v18.7.0/bin /home/abdala/.nvm/versions/node/v18.7.0/lib/node_modules/pm2/bin/pm2 startup systemd -u abdala --hp /home/abdala
 #
 #script para restartar o processo através do pm2
 
 git pull
 npm ci
 pm2 stop 0
 pm2 start tweetBot.yml
 pm2 save
 pm2 logs
~                
