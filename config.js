const members = [ // eslint-disable-line no-unused-vars
  // For each member, add a block like this:
  {
    name: 'Jack', // Username to be displayed
    pfp: 'jack.jpg', // name of file in pfp folder
    prefix: '[', // Prefix at the start of the message to identify the member by (must be unique)
    suffix: ']' // Suffix at the end of the message. Not used for identification, but stripped from the end of the message if present.
  },
  {
    name: 'Jane',
    pfp: 'jane.jpg',
    prefix: 'Jane: ',
    suffix: ''
  },
  // This final member is used as a fallback: they will "send" any message that doesn't have a valid prefix
  {
    name: 'John',
    pfp: 'John.jpg'
  }
]
