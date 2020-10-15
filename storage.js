class Storage {
    load = (callback) => {
        // names of options and their default values
        chrome.storage.local.get({
            url: null,
            ttl: "10",
            auth: null
        }, (items) => {
            callback(items)
        })
    }

    save = (data, callback) => {
        chrome.storage.local.set({
            url: data.url || null,
            ttl: data.ttl || "10",
            auth: data.auth || null
        }, callback)
    }
}

const storage = new Storage()
