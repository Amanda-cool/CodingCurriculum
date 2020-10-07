package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	//"github.com/joho/godotenv"
)

// Vinyl  struct for database
type product struct {
	ProductID int     `json:"product_ID"`
	Artist    string  `json:"artist"`
	Price     float64 `json:"price"`
	Genre     string  `json:"genre"`
	Image     string  `json:"img"`
}

// global pointer to sql db  so we don't end up in random locations
var db *sql.DB

// Website can access the database, puts other users on whitelist for access, request made to API to allot permission to the domain
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {
	var err error
	// retrieve password from .env file
	var password = os.Getenv("DB_PASSWORD")
	db, err = sql.Open("mysql", fmt.Sprintf("root:%s@tcp(database:3306)/vrp", password))
	// error handling on DB will stop program and print out  error response
	if err != nil {
		panic(err.Error())
	}
	// once you're done with the DB close it out, leaving it open anyone can send request and hit my DB
	defer db.Close()
	// establishing a set of instructions to reach the port that will be used
	router := mux.NewRouter()
	// defining a handler to perform a GET method and receive product info
	router.HandleFunc("/genres", fetchProducts).Methods("GET")

	log.Fatal(http.ListenAndServe(":2000", router))
}

func fetchProducts(w http.ResponseWriter, r *http.Request) {
	// enableCors function to allow access
	enableCors(&w)

	//Products is a slice based on the struct of product
	var products []product
	// Initialize and consolidate the query
	query := "SELECT product_ID, artist, price, genre, img FROM products"

	// Execute the query
	results, err := db.Query(query)
	if err != nil {
		panic(err.Error()) //execute status error header here!!!!
	}

	for results.Next() {
		var product product

		err := results.Scan(&product.ProductID, &product.Artist, &product.Price, &product.Genre, &product.Image)
		if err != nil {
			panic(err.Error())
		}
		products = append(products, product)
	}
	// Similar to  200 status code , there are different status codes for different things
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}
