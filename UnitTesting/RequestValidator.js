function requestValidator(data) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];

    if (!data.hasOwnProperty("method") || !methods.includes(data.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let regex = /^[a-z0-9.]+$/g;

    if (!data.hasOwnProperty("uri") || !regex.test(data.uri)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    if (!data.hasOwnProperty("version") || !versions.includes(data.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    regex = /^[^<>\\&'"]+$/g;

    if (!data.hasOwnProperty("message") || data.message !== "" && !regex.test(data.message)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return data;
}

console.log(requestValidator({ method: "DELETE", uri: "apt", version: "HTTP/1.1", message: "ag" }));