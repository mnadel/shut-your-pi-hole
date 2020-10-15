init:
	mkdir dist

clean:
	rm -rf dist

package: init
	zip dist/shutyourpihole.zip manifest.json *.html *.js *.css *.png
