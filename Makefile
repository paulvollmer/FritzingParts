#
# FritzingPartsApi - Makefile
#


# Variables

SCRIPTS_DIR = scripts/



build:
	@make clean
	@make write_parts_json
	@make create_parts_dir
	@make copy_fzp_files
	@make convert_fzp_files_to_json
	@make copy_svg_files
	@make write_temp_json
	@make parts_overview_html
	@make parts_html
	@make tags_overview_json
	@make tags_overview_html
	@make tags_json
	@make authors_json

clean:
	@make clean_parts_json
	@make clean_parts_dir
	@make clean_tags
	@make clean_authors


# parts.json

write_parts_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "write the parts.json file"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)write_parts_json.js

clean_parts_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "remove parts.json"
	@echo "--------------------------------------------------------------------------------"
	@rm -rf parts.json

# parts directory

create_parts_dir:
	@echo "--------------------------------------------------------------------------------"
	@echo "create the parts directory"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)create_parts_dir.js

clean_parts_dir:
	@echo "--------------------------------------------------------------------------------"
	@echo "clean parts directory"
	@echo "--------------------------------------------------------------------------------"
	@rm -rf parts

# parts files

copy_fzp_files:
	@echo "--------------------------------------------------------------------------------"
	@echo "copy .fzp files"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)copy_fzp_files.js

convert_fzp_files_to_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "convert .fzp files to json"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)convert_fzp_files_to_json.js

copy_svg_files:
	@echo "--------------------------------------------------------------------------------"
	@echo "copy .svg files"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)copy_svg_files.js

parts_overview_html:
	@echo "--------------------------------------------------------------------------------"
	@echo "write parts list html file."
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)write_parts_overview_html.js

parts_html:
	@echo "--------------------------------------------------------------------------------"
	@echo "write parts html files"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)write_parts_html.js

# tags

tags_overview_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "write the tags.json overview file"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)write_tags_overview_json.js

tags_overview_html:
	@echo "--------------------------------------------------------------------------------"
	@echo "write the tags.html overview file."
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)write_tags_overview_html.js

tags_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "generate the tags json files."
	@echo "--------------------------------------------------------------------------------"
	@rm -rf tags
	@mkdir tags
	@node $(SCRIPTS_DIR)write_tags_json.js

clean_tags:
	@echo "--------------------------------------------------------------------------------"
	@echo "clean tags dir and tags.json"
	@echo "--------------------------------------------------------------------------------"
	@rm -rf tags/
	@rm -rf tags.json
	@rm -rf tags.html

# authors

authors_json:
	@node $(SCRIPTS_DIR)write_authors_overview_json.js

clean_authors:
	@rm -rf authors.json

# temporary parts data

write_temp_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "write the _temp_parts_data.json file"
	@echo "--------------------------------------------------------------------------------"
	@node $(SCRIPTS_DIR)write_temporary_json.js

clean_temp_json:
	@echo "--------------------------------------------------------------------------------"
	@echo "remove _temp_parts_data.json"
	@echo "--------------------------------------------------------------------------------"
	@rm -rf $(SCRIPTS_DIR)_temp_parts_data.json


# bootstrap

bootstrap:
	git submodule init
	git submodule update
	npm install


# jekyll server

server:
	jekyll serve --safe --baseurl '' --watch --verbose
