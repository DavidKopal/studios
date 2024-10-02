function move(link) {
    let a = document.createElement('a')
    a.textContent= '...'
    a.href = link
    document.body.appendChild(a)
    a.click()
    delete a
}