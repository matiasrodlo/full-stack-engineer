# Git Workflow Cheat Sheet

## Branching

1. **`git branch`**

   - _Description:_ Lists existing branches or creates a new branch.
   - _How to use:_
     - To list branches: `git branch`
     - To create a new branch: `git branch <branch_name>`

2. **`git merge`**

   - _Description:_ Combines changes from different branches into the current branch.
   - _How to use:_
     - Make sure you are in the branch where you want to merge changes: `git checkout <target_branch>`
     - Execute the merge command: `git merge <source_branch>`
     - Resolve any merge conflicts if necessary.

3. **`git branch -d`**
   - _Description:_ Deletes a specified branch.
   - _How to use:_
     - Ensure you are not currently on the branch you want to delete: `git checkout <another_branch>`
     - Delete the branch: `git branch -d <branch_to_delete>`
