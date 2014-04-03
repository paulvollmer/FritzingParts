#
# FritzingPartsApi - Makefile
#


build: clean write_parts_json create_parts_dir copy_fzp_files convert_fzp_files_to_json \
	     copy_svg_files parts_overview_html parts_html

clean: clean_parts_json clean_parts_dir


# parts.json

write_parts_json:
	@echo "write the parts.json file"
	@node scripts/write_parts_json.js

clean_parts_json:
	@echo "remove parts.json"
	@rm -rf parts.json

# parts directory

create_parts_dir:
	@echo "create the parts directory"
	@node scripts/create_parts_dir.js

clean_parts_dir:
	@echo "clean parts directory"
	@rm -rf parts

# parts files

copy_fzp_files:
	@echo "copy .fzp files"
	@node scripts/copy_fzp_files.js

convert_fzp_files_to_json:
	@echo "convert .fzp files to json"
	@node scripts/convert_fzp_files_to_json.js

copy_svg_files:
	@echo "copy .svg files"
	@node scripts/copy_svg_files.js

parts_overview_html:
	@echo "generate parts list html file."
	@node scripts/generate_parts_overview_html.js

parts_html:
	@echo "generate parts html files"
	@node scripts/generate_parts_html.js

# tags

tags_list:
	@echo "generate tags list json file"
	@node scripts/generate_tags_list.js

tags_files:
	@echo "generate the tags json files."
	@rm -rf tags
	@mkdir tags
	@node scripts/generate_tags_files.js


# bootstrap

bootstrap:
	git submodule init
	git submodule update
	npm install
