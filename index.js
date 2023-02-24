const inquirer = require('inquirer')
const { logError, logSuccess } = require('./src/utils/chalk')
const TwitterBot = require('./src/TwitterBot')

const config = require('./config.json')

let props = {
    action: config.action,
    cycles: config.cycles,
    search: config.search,
    username: config.username,
   password: config.password
}

async function createBot()  {
   const bot = new TwitterBot()
   await bot.init()
   const username = props.username
   const password = props.password
   // Login to Twitter
   await bot.login(username, password)
   return bot

}

async function startBot() {
   try {
      const bot = await createBot()
      const cycles = props.cycles

      // Save storage state to "storage.json"
      await bot.context.storageState({path: 'storage.json'})

      if (props.search) {
         await bot.search(props.search)
      }

      // Perform the action
      switch (props.action) {
         case 'gm':
            if (!props.search) {
               await bot.search('Gm')
            }
            await bot.performMultipleTweetActions(cycles, {
               like: true,
               reply: true,
               getReply: () => bot.getRandomGm(),
            })
            break
         case 'gn':
            if (!props.search) {
               await bot.search('Gn')
            }
            await bot.performMultipleTweetActions(cycles, {
               like: true,
               reply: true,
               getReply: () => bot.getRandomGn(),
            })
            break
         case 'like_tweets':
            await bot.performMultipleTweetActions(cycles, {
               like: true,
            })
            break
         case 'follow':
            await bot.performMultipleTweetActions(cycles, {
                like: true,
               reply: false,
               follow: true
            })
            break
         case 'reply_tweets':
            await bot.performMultipleTweetActions(cycles, {
               like: true,
               reply: true,
               getReply: () => props.reply,
            })
            break
         default:
            logError('Invalid action')
            process.exit(1)
            break
      }

      logSuccess(`Done! ${cycles} actions performed`)

      // Close the browser
      await bot.close()


   } catch (error) {
      if (error.isTtyError) {
         // Prompt couldn't be rendered in the current environment
         logError(`Prompt couldn't be rendered in the current environment`)
      } else {
         // Something else when wrong
         logError(`Something went wrong: ${error}`)
      }


   }
}

async function run() {
   try {
      props.search = config.search[Math.floor(Math.random() * config.search.length)]
      props.cycles = Math.floor(Math.random() * config.cycles + 1)
      props.action = config.action[Math.floor(Math.random() * config.action.length)]
      run = Math.random() >= 0.5;

      if (run)
         await startBot()

      await waitAndRun()
   }
    catch (error) {
      console.log(error)
       await waitAndRun()
    }
}

async function waitAndRun() {
   console.log('sleeping for 3 hours')
    setTimeout(async function() {
         await run();
      },
      10800000);
}


run().then(r =>  console.log(r))




