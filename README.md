# IEEE Website (Under Construction)

## Installation Instructions
1. Install NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/)

The following commands are to be run in Terminal (Mac/Linux) or Command Prompt (Windows):

2. Clone this repo (`git clone https://github.com/ieeecornell/website.git`)
3. Go to the project folder (`cd website/`)
4. Install all dependencies (`npm install`)

## Viewing the website
The following commands are to be run in Terminal (Mac/Linux) or Command Prompt (Windows):
1. Go to the project folder (`cd website/`)
2. Run the server (`node app.js`)

The following step is to be done in your web browser.
3. Now, in your web browser go to `localhost:3000`. This should pull up the webpage.

## How to View Branches Under Construction
1. On Github's website, look for the branch you want to check out. Each Pull Request has an associated branch which can be viewed on Github. If in doubt ask in the web channel which branch has the relevant features you want to look at.

The following commands are to be run in Terminal (Mac/Linux) or Command Prompt (Windows):
2. Go to the project folder (`cd website/`)
3. Checkout the branch (`git checkout <branch_name>`). The branch name does not need quotes around it.
4. If necessary, pull in updates: (`git pull`).

## Updating Pictures Instructions
0. Message Kenneth your Github Username
1. Clone this repo (`git clone https://github.com/ieeecornell/website.git`)
2. Go to the project folder (`cd website`)
3. Find your picture in the `/public/profiles/` folder
4. Rename it to `<your netid>.jpg`. For example, Kenneth's would be `kwf37.jpg`
5. Run (`git add -A`)
6. Run (`git commit -m "Updated <your name here>"`)
7. Run (`git push`)

If you get the message that the remote repository has changes you do not have locally, run `git pull --rebase` and then rerun (`git push`)



## Files to Update
* `eboard.yml`: This file contains all the member data for displaying with your picture. Please update this.
* `/public/images/profiles`: This file contains all the pictures. Please update with netIDs.
