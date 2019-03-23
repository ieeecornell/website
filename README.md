# IEEE Website (Under Construction)

## Download Instructions
1. Clone this repo (`git clone https://github.com/ieeecornell/website.git`)
2. Go to the project folder (`cd website`)
3. Install all dependencies (`npm install`)
4. Run the server (`nodemon app.js`)

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
