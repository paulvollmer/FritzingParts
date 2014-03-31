#
# FritzingPartsApi - Makefile
#


build: clean parts_json parts_dir

clean: clean_parts_json clean_parts_dir


# parts.json

parts_json:
	@echo "generate parts.json"
	@node  scripts/generate_parts_json.js > parts.json

clean_parts_json:
	@echo "remove parts.json"
	@rm -rf parts.json


# parts directory

parts_dir:
	@echo "generate parts directory"
	@node scripts/generate_parts_dir.js

clean_parts_dir:
	@echo "clean parts directory"
	@rm -rf parts


bootstrap:
	git submodule init
	git submodule update
	npm install
