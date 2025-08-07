# This repository is unmaintained. Up-to-date version on [Codeberg](https://codeberg.org/andOlga/syschat).

# SysChat

A single-player chat application.

---

## Wait, what?

This is a very basic instant messenger. However: there is no server. There is no networking. No data is ever sent anywhere. Everything happens on your PC and your PC alone.

You can quickly switch between different "accounts" with every message that is "sent", creating a realistic IM conversation in a truly isolated and controlled environment.

## Okay, why?

This app targets two groups of users, though there may be uses beyond what we expect.

First, and foremost, the plural community: it is not uncommon for plural people to use a notepad or something to converse with the other members of their system. Of course, using notepad is incredibly annoying, what with having to type out names and such to make the conversation readable afterwards.

Secondly, chatfic writers. With this you can speed up the writing process as switching between accounts can be simplified to just a single button press, and realistic timestamps are auto-generated for you as they are based on the actual time of messages being "sent".

---

## What are the actual features that are implemented?

- Usernames, profile pictures and timestamps.
- Account switching based on message content with a prefix/suffix system. For example, you can configure the user Jack to send messages formatted as `[text]`, the user Jane to send messages formatted as `Jane: text` (or just `J text`, if you wish), and the user John to send all other messages, simply as `text`, without any special formatting. PluralKit users should feel right at home.
- Messages are just HTML, so you can do image embeds with `<img>`, format text with `<b>`, `<i>` and `<u>`, color it with `<font color>` and do any other crazy stuff.
- Export chat logs to plain text, PDF, or interactive HTML (see below).
- An AO3 work skin is included to retain the exact look of the application in published fics from the HTML export.

---

## How do I use this?

[Download](../../archive/refs/heads/master.zip) the app and extract it somewhere on your PC. Grab your profile pictures from wherever, and put them in the `pfp` folder. Then, open `config.js` in your text editor and configure the accounts according to the instructions found inside.

This concludes the initial configuration. From now on, when you want to use the app, just open the `index.html` file in Google Chrome, Microsoft Edge, or another Chromium-based browser and start chatting (Firefox will technically work but will not allow you to export chat logs to anything but PDF).

There are a few "special" messages that, when sent, will trigger a special action and not send an actual message. These are:

- `/clear` to completely erase the current chat log and start anew.
- `/save` or `/export` to produce an interactive HTML export of the current chat log. This is effectively a full copy of SysChat's `index.html` with your messages prepackaged into it, so when you open this export you can continue sending messages right where you left off. As such, this is not only an easy-to-view export format, but also a way to maintain your message history across multiple chat sessions. Note that these exports *must* be placed in the same folder where the original `index.html` is so that it can find the relevant configs and PFP files (you may replace the original `index.html` with the export if you so choose).
- `/ao3` to generate an export for publishing to Archive of Our Own (see below).
- `/savepdf` or `/exportpdf` to generate a PDF export of the current chat log, or allow you to print it.
- `/savetext` or `/exporttext` to generate a plain-text export of the current chat log. This will format every message as `[time] <name> message`. The PFPs are completely lost in this export format.

There is no real support for message editing/deletion, however we believe this to be somewhat unnecessary since your browser's "Inspect element" feature will handle the job just fine, and since the usual concerns of e.g. redacting accidently revealed private information or removing messages sent to a wrong recipient are entirely irrelevant in single-player context.

---

## How do I publish my logs on AO3?

First off, you need to create a "work skin" on AO3, which you can do [here](https://archiveofourown.org/skins/new?skin_type=WorkSkin). Give it any title you wish. Then, open `ao3.css` from SysChat in a text editor, and copy-paste the entire contents of the file into the "CSS" field. Save your skin. You will only ever need to do this **once**, you can re-use the same skin on multiple works.

Next, go into your pfp folder, and double-check that all of the images are perfect squares. For exmaple, a resolution like `300x300` is okay, but `305x301` is not. SysChat normally crops PFPs for you automatically, but for some insane reason AO3 does not understand what `object-fit` is, so you'll have to do it yourself. Once you've checked your PFPs' shapes, upload all of them to some image host with direct linking support, like e.g. imgur.

Next, generate an AO3 export of your log by sending the message `/ao3`. You will need to open this in a text editor and use your find and replace function to change all PFP links to external ones. For example, search for `pfp/John.jpg` and replace it with `https://i.imgur.com/EGvpb2S.jpeg`, repeating the process for all the PFPs present in the file.

Finally, just take the resulting export and publish it as a work on AO3, making sure to select the work skin you created in the first step. If everything was done correctly, your fic should look exactly like the log in SysChat's interface does.
