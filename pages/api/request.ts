const request = async(url, method) => {
    const res = await fetch(url, {
        method
    })

    return res
}

export default request