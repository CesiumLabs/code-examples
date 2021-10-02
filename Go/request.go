package main

import (
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	// A http request is created.
	res, err := http.Get("https://jsonplaceholder.typicode.com/posts")
	if err != nil {
		log.Fatalln(err)
	}

	// The body of the http request is read and converted into bytes.
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatalln(err)
	}

	// Later the bytes is converted into string and logged.
	log.Printf(string(body))
}
