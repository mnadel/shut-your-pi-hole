class Storage {
    load = (callback) => {
        chrome.storage.local.get({
            url: null,
            auth: null
        }, (items) => {
            callback(items)
        })
    }

    save = (data, callback) => {
        chrome.storage.local.set({
            url: data.url,
            auth: data.auth
        }, callback)
    }
}

const storage = new Storage()
