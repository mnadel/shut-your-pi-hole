class Syph {
    disable = (ttl) => {
        storage.load(config => {
            const url = `${config.url}?disable=${ttl}&auth=${config.auth}`
            const fetchConfig = {
                mode: "no-cors"
            }

            fetch(url, fetchConfig).then((_) => {
                console.log(`Pi-hole disabled for ${ttl}s`)
                this.closePopups()
            }).catch((error) => {
                console.log(error)
                this.closePopups()
                alert("Error disabling Pi-hole")
            })
        })
    }

    closePopups = () => {
        var popups = chrome.extension.getViews({type: "popup"})
        popups.forEach((popup) => {
            popup.close()
        })
    }
}

const syph = new Syph()

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu")
    if (menu) {
        for (let i = 0; i < menu.children.length; i++) {
            let child = menu.children[i]
            child.addEventListener("click", () => {
                syph.disable(child.id)
            })
        }
    }
})
