package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/joho/godotenv"
	"os"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error when get env")
	}

	port := os.Getenv("PORT")

	fmt.Println("Golang - Server listens at port " + port)
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}
