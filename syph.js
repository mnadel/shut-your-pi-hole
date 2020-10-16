const SYPH_MENUITEM_ID = "Syph-Menu";

class Syph {
    constructor() {
        storage.load(config => {
            // this allows for reloading of the extension w/o error
            chrome.contextMenus.removeAll()

            chrome.contextMenus.create({
                id: SYPH_MENUITEM_ID,
                title: this.contextMenuTitle(config),
                contexts: [
                    "all"
                ]
            })

            chrome.contextMenus.onClicked.addListener(this.clicked)
        })
    }

    contextMenuTitle = (config) => {
        return `Disable Pi-hole (for ${config.ttl}s)`
    }

    optionsUpdated = (config) => {
        chrome.contextMenus.update(SYPH_MENUITEM_ID, {
            title: this.contextMenuTitle(config)
        })
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
