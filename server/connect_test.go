package main

import (
	"testing"
)

func TestConnect(t *testing.T) {
	_, got := initDb()
	want := error(nil)
	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}
}
