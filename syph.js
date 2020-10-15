class Syph {
    static get ContextMenuID() {
        return "Syph-Menu"
    }

    constructor() {
        chrome.contextMenus.create({
            title: "Disable Pi-hole", 
            contexts: [
                "page_action"
            ],
            id: this.ContextMenuID
        })

        chrome.contextMenus.onClicked.addListener(this.clicked)
    }

    clicked = (_) => {
        storage.load(config => {
            const url = `${config.url}?disable=${config.ttl}&auth=${config.auth}`
            const fetchConfig = {
                mode: "no-cors"
            }

            fetch(url, fetchConfig).then((_) => {
                console.log("Pi-hole has been disabled")
            }).catch((error) => {
                console.log("Error shutting down pi-hole", error)
            })
        })
    }
}

const syph = new Syph()
