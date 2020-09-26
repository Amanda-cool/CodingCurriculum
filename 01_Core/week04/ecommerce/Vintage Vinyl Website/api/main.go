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
// Website can access the database, puts other users on whitelist for access
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
	// establishing a set of instructions to reach the port that will be used
	router := mux.NewRouter()
	// defining a handler toperform a GET method and receive product info
	router.HandleFunc("/products", fetchProducts).Methods("GET")

	log.Fatal(http.ListenAndServe(":2000", router))
}

func fetchProducts(w http.ResponseWriter, r *http.Request) {
// enableCors function to allow access
enableCors()	

// ???
products := []Vinyl{}
// Initialize and consolidate the query
query := "SELECT product_ID, artist, price, genre, img FROM products"

// Execute the query
results, err := db.Query(query)
if err != nil {
	panic(err.Error())
}

for results.Next() {
	var tag Tag

	err = results.Scan(&tag.ID, &tag.Name)
	if err != nil {
		panic(err.Error())
		}
		log.Printf(tag.Name)
	}

}


type Vinyl struct {
	ProductID int64 `json:"product_ID"`
	Artist string `json:"artist"`
	Price float64 `json:"price"`
	Genre string `json:"genre"`
	Image string `json:"img"`

}
