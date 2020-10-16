class Storage {
    load = (callback) => {
        chrome.storage.local.get({
            url: null,
            ttl: "30",
            auth: null
        }, (items) => {
            callback(items)
        })
    }

    save = (data, callback) => {
        chrome.storage.local.set({
            url: data.url,
            ttl: data.ttl || "30",
            auth: data.auth
        }, callback)
    }
}

const storage = new Storage()
