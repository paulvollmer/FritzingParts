# FritzingPartsApi - Makefile

build: clean
	@echo "generate"
	node scripts/generate.js

clean:
	rm -rf parts.json
	rm -rf parts
