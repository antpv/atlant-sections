class TransactionsSocketClient {
  websocket = null

  constructor(options) {
    this.wsUri = options.wsUri
    this.onMessage = options.onMessage
  }

  init() {
    return new Promise((resolve, reject) => {
      if (!this.websocket) {
        this.websocket = new WebSocket(this.wsUri)

        this.websocket.onopen = resolve
        this.websocket.onerror = reject
        this.websocket.onmessage = this.onMessage
      } else {
        reject()
      }
    })
  }

  send(message) {
    this.websocket.send(JSON.stringify(message))
  }

  destroy() {
    if (this.websocket) {
      this.websocket.close()
      this.websocket = null
    }
  }
}

// Usage example:

// const client = new TransactionsSocket({
//   wsUri: `url`,
//   onMessage: () => {}
// })

export default TransactionsSocketClient
