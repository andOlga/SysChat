/* global members */
async function exportFile (content, mime, type) {
  const file = await window.showSaveFilePicker({
    excludeAcceptAllOption: true,
    suggestedName: new Date().toISOString() + `.${type}`,
    types: [{ description: `${type.toUpperCase()} file`, accept: { [mime]: `.${type}` } }]
  })
  const wri = await file.createWritable()
  await wri.write(content)
  await wri.close()
}
async function exportText () {
  let textOut = ''
  const bubbles = [...document.getElementsByClassName('bubble')]
  for (const bubble of bubbles) {
    const time = bubble.querySelector('.time').innerText
    const name = bubble.querySelector('.name').innerText
    const message = bubble.querySelector('.message').innerText
    textOut += `[${time}] <${name}> ${message}\n`
  }
  exportFile(textOut, 'text/plain', 'txt')
}
document.addEventListener('DOMContentLoaded', event => {
  const main = document.getElementById('main')
  const input = document.getElementById('input')
  const specialCmds = ['/save', '/export', '/savepdf', '/exportpdf', '/savetext', '/exporttext', '/ao3', '/clear']
  // "send" a message
  input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      const curTime = new Date().toLocaleTimeString()
      let messageContent = document.getElementById('input').value
      if (specialCmds.includes(messageContent.trim())) {
        switch (messageContent.trim()) {
          case '/clear':
            main.innerHTML = ''
            break
          case '/save':
          case '/export':
            exportFile(document.documentElement.outerHTML, 'text/html', 'html')
            break
          case '/savetext':
          case '/exporttext':
            exportText()
            break
          case '/ao3':
            exportFile(document.getElementById('main').innerHTML, 'text/html', 'html')
            break
          case '/savepdf':
          case '/exportpdf':
            window.print()
            break
        }
        input.value = ''
        return
      }
      let i = 0
      for (i = 0; i < members.length; i++) {
        if (!members[i].prefix) members[i].prefix = ''
        if (!members[i].suffix) members[i].suffix = ''
        if (messageContent.startsWith(members[i].prefix)) {
          break
        }
      }
      messageContent = messageContent.substring(
        members[i].prefix.length,
        messageContent.length - (messageContent.endsWith(members[i].suffix) ? members[i].suffix.length : 0)
      ).trim()
      const pfpImage = `pfp/${members[i].pfp}`
      const userName = members[i].name
      // Create all the elements for the message
      const bubble = document.createElement('div')
      bubble.className = 'bubble'
      const pfp = document.createElement('img')
      pfp.className = 'pfp'
      pfp.src = pfpImage
      const name = document.createElement('span')
      name.className = 'name'
      name.innerText = userName
      const time = document.createElement('span')
      time.className = 'time'
      time.innerText = curTime
      const message = document.createElement('span')
      message.className = 'message'
      message.innerHTML = messageContent
      bubble.appendChild(pfp)
      bubble.appendChild(name)
      bubble.appendChild(time)
      bubble.appendChild(message)
      main.appendChild(bubble)
      input.value = ''
      main.scrollTop = main.scrollHeight
    }
  })
  input.focus()
})
