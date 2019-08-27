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


## Modifying Static-Hosted Website
You may only modify ieee.ece.cornell.edu if you are one of the listed people. If you would like access please message Felicia (any one of the people listed should also have full administrative access/management):
* Priyanka Dilip
* Kenneth Fang
* Felicia Guo
* Rohan Patel 
* Joy Thean
* Kevin Ying

To modify files:

1. To configure the WebDAV client, you must use a special WebDAV client. Download one of DreamWeaver, BitKinex, WinSCP, Cyberduck, Transmit,
2. obtain a WebDAV key by visiting [https://webhost092.hosting.cornell.edu:8144/davlogin](https://webhost092.hosting.cornell.edu:8144/davlogin) in a webbrowser.  Login using your NetID & Password, and copy the entire long string the page displays into your clipboard:
3. use the following WebDAV connection URL: [https://webhost092.hosting.cornell.edu:8144/ieee-ece/htdocs/](https://webhost092.hosting.cornell.edu:8144/ieee-ece/htdocs/) to configure your WebDAV client; this link will only work in your WebDAV client downloaded in step 0.
4. Use your NetID as a username, and the WebDAV key you obtained from step 1 as your password to configure your WebDAV client.  Your key will be valid for eight hours.  After that, you will have to generate a new key and re-login. 
