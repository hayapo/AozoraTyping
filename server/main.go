package main

import (
	"fmt"

	_ "github.com/jackc/pgx/v4/stdlib"
)

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {
	db, err := initDb()
	fmt.Println(db, err)
	// rows, err := db.Query("SELECT id,title,author FROM typing_info")
	// defer rows.Close()
	// //var infos []*TypingInfo
	// for rows.Next() {
	// 	i := &TypingInfo{}
	// 	if err := rows.Scan(&i.id, &i.title, &i.author); err != nil {
	// 		log.Println(err)
	// 	}
	// 	fmt.Println(*i)
	// }
}
