class Storage {
    load = (callback) => {
        // names of options and their default values
        chrome.storage.local.get({
            url: null,
            ttl: null,
            auth: null
        }, (items) => {
            callback(items)
        })
    }

    save = (data, callback) => {
        chrome.storage.local.set({
            url: data.url,
            ttl: data.ttl,
            auth: data.auth
        }, callback)
    }
}

const storage = new Storage()
