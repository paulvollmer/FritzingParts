# scripts/currentFritzingRepoHash.sh
#
# get the latest commit hash and save it to file.

cd fritzing
git log -1 --format="%H" > ../currentFritzingRepoHash.txt
