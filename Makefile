#
# FritzingPartsApi - Makefile
#


# Variables

SCRIPTS_DIR = scripts/



build:
	make clean
	make write_parts_json
	make write_temp_json
	make create_parts_dir
	make copy_fzp_files
	make convert_fzp_files_to_json
	make copy_svg_files
	make parts_overview_html
	make parts_html
	make tags_list
	make tags_files

clean:
	make clean_parts_json
	make clean_parts_dir
	make clean_tags


# parts.json

write_parts_json:
	@echo "write the parts.json file"
	@node $(SCRIPTS_DIR)write_parts_json.js

clean_parts_json:
	@echo "remove parts.json"
	@rm -rf parts.json

# temporary parts data

write_temp_json:
	@echo "write the _temp_parts_data.json file"
	@node $(SCRIPTS_DIR)write_temporary_json.js

clean_temp_json:
	@echo "remove _temp_parts_data.json"
	@rm -rf $(SCRIPTS_DIR)_temp_parts_data.json

# parts directory

create_parts_dir:
	@echo "create the parts directory"
	@node $(SCRIPTS_DIR)create_parts_dir.js

clean_parts_dir:
	@echo "clean parts directory"
	@rm -rf parts

# parts files

copy_fzp_files:
	@echo "copy .fzp files"
	@node $(SCRIPTS_DIR)copy_fzp_files.js

convert_fzp_files_to_json:
	@echo "convert .fzp files to json"
	@node $(SCRIPTS_DIR)convert_fzp_files_to_json.js

copy_svg_files:
	@echo "copy .svg files"
	@node $(SCRIPTS_DIR)copy_svg_files.js

parts_overview_html:
	@echo "generate parts list html file."
	@node $(SCRIPTS_DIR)generate_parts_overview_html.js

parts_html:
	@echo "generate parts html files"
	@node $(SCRIPTS_DIR)generate_parts_html.js

# tags

tags_list:
	@echo "write the tags json file"
	@node $(SCRIPTS_DIR)write_tags_json.js

tags_files:
	@echo "generate the tags json files."
	@rm -rf tags
	@mkdir tags
	@node $(SCRIPTS_DIR)generate_tags_files.js

clean_tags:
	@echo "clean tags dir and tags.json"
	@rm -rf tags/
	@rm -rf tags.json


# bootstrap

bootstrap:
	git submodule init
	git submodule update
	npm install
