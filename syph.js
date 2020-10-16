class Syph {
    constructor() {
        chrome.contextMenus.create({
            id: "Syph-Menu",
            title: "Disable Pi-hole", 
            contexts: [
                "page_action"
            ]
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
                console.log("Error shutting down Pi-hole", error)
            })
        })
    }
}

const syph = new Syph()
