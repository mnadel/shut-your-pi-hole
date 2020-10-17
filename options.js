document.getElementById("options-save").addEventListener("click", () => {
    const opts = {
        url: document.getElementById("options-url").value,
        auth: document.getElementById("options-auth").value
    }

    storage.save(opts, () => {
        const status = document.getElementById("options-status")
        const currStatus = status.textContent

        status.textContent = "Saved!"

        setTimeout(() => {
            status.textContent = currStatus
        }, 1000)
    })
})

storage.load((items) => {
    document.getElementById("options-url").value = items.url
    document.getElementById("options-auth").value = items.auth
})
