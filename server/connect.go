package main

import (
	"database/sql"
	"os"

	_ "github.com/jackc/pgx/v4/stdlib"
	"github.com/joho/godotenv"
)

type TypingInfo struct {
	Id               int64  `db:"id,primaryeky, autoincrement"`
	CardId           int64  `db:"card_id"`
	Title            string `db:"title"`
	Author           string `db:"author"`
	Url              string `db:"url"`
	KanjiText        string `db:"kanjiText"`
	WatatiRomajiText string `db:"watatiRomajiText"`
	HiraganaText     string `db:"hiraganaText"`
	RomajiText       string `db:"romajiText"`
}

func initDb() (*sql.DB, error) {
	_ = godotenv.Load(".env/postgres.env")
	dsn := os.Getenv("POSTGRES_DSN")
	db, err := sql.Open("pgx", dsn)
	return db, err
}
