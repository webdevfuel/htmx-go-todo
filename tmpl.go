package main

import (
	"html/template"
	"io/fs"
	"os"
	"path/filepath"
	"strings"

	"github.com/Masterminds/sprig/v3"
)

var tmpl *template.Template

func parseTemplates() error {
	t := template.New("").Funcs(sprig.FuncMap())
	err := filepath.Walk("templates", func(path string, _ fs.FileInfo, err error) error {
		if strings.Contains(path, ".html") {
			tmplBytes, err := os.ReadFile(path)
			if err != nil {
				return err
			}
			_, err = t.New(path).Funcs(sprig.FuncMap()).Parse(string(tmplBytes))
			if err != nil {
				return err
			}
		}
		return err
	})
	if err != nil {
		return err
	}
	tmpl = t
	return nil
}
