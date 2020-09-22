package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"

	"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"

)

// global pointer to sql db  so we don't end up in random locations
var db *sql.DB

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {
	var  err error
	db, err = sql.Open("mysql", "root:Greatjade_912@tcp(database:3306)/vrp")
	// error handling on DB will stop program and print out  error response
	if err != nil {
		panic(err.Error())
	}
	// once you're done with  the DB close it out
	defer  db.Close()

	router := mux.NewRouter()

	router.HandleFunc("/products", fetchProducts).Methods("GET")

	log.Fatal(http.ListenAndServe(":2000", router))
}

func homePage(w http.ResponseWriter, r *http.Request) {
	// quick way to enable CORS in localhost, or to open your API to anyone in the world
	enableCors(&w)
	fmt.Fprintf(w,"Welcome to the Homepage!")
	fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":2000", nil))
}

type Vinyl struct {
	ProductID int64 `json:"product_ID"`
	Artist string `json:"artist"`
	Price float64 `json:"price"`
	Genre string `json:"genre"`
	Image string `json:"img"`

}
// declare a global Vinyls array
// that we will then populate or call in our main function
// this will simulate a database
var Vinyls []Vinyl