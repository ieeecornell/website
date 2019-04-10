cd Do# IEEE Website (Under Construction)

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


## Modifying Website
You may only modify the website if you are one of the listed people. If you would like access please message Felicia:
* Priyanka Dilip
* Kenneth Fang
* Rohan Patel 
* Joy Thean
* Kevin Ying

To modify files:
0. To configure the WebDAV client, you must use a special WebDAV client. Download one of DreamWeaver, BitKinex, WinSCP, Cyberduck, Transmit,
1. obtain a WebDAV key by visiting [link to https://webhost092.hosting.cornell.edu:8144/davlogin](https://webhost092.hosting.cornell.edu:8144/davlogin) in a webbrowser.  Login using your NetID & Password, and copy the entire long string the page displays into your clipboard:
2. use the following WebDAV connection URL: [link to https://webhost092.hosting.cornell.edu:8144/ieee-ece/htdocs/](https://webhost092.hosting.cornell.edu:8144/ieee-ece/htdocs/) to configure your WebDAV client; this link will only work in your WebDAV client downloaded in step 0.
3. Use your NetID as a username, and the WebDAV key you obtained from step 1 as your password to configure your WebDAV client.  Your key will be valid for eight hours.  After that, you will have to generate a new key and re-login. 
