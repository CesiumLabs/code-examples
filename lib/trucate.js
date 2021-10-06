const truncate= function(str) {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
}

export default truncate;