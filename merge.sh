CURRENT_BRANCH=git branch --show-current
git switch master
git pull origin master
git rebase $CURRENT_BRANCH
git push
git pull