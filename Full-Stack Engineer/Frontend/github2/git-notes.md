# Git Workflow Cheat Sheet

## Initialization

1. **`git init`**
   - _Description:_ Initializes a new Git repository.
   - _How to use:_ Open your terminal, navigate to the desired project directory, and run `git init`.

## Checking Status

2. **`git status`**
   - _Description:_ Displays the status of changes in the working directory.
   - _How to use:_ After making changes in your project, run `git status` to see which files are untracked, modified, or staged.

## Staging Changes

3. **`git add`**
   - _Description:_ Adds changes in the working directory to the staging area.
   - _How to use:_ Use `git add <file>` to stage a specific file or `git add .` to stage all changes.

## Branching

4. **`git branch`**

   - _Description:_ Lists existing branches or creates a new branch.
   - _How to use:_
     - To list branches: `git branch`
     - To create a new branch: `git branch <branch_name>`

5. **`git merge`**

   - _Description:_ Combines changes from different branches into the current branch.
   - _How to use:_
     - Make sure you are in the branch where you want to merge changes: `git checkout <target_branch>`
     - Execute the merge command: `git merge <source_branch>`
     - Resolve any merge conflicts if necessary.

6. **`git branch -d`**

   - _Description:_ Deletes a specified branch (safe delete, checks for unmerged changes).
   - _How to use:_
     - Ensure you are not currently on the branch you want to delete: `git checkout <another_branch>`
     - Delete the branch: `git branch -d <branch_to_delete>`

7. **`git branch -D`**
   - _Description:_ Forces the deletion of a specified branch (irrespective of unmerged changes).
   - _How to use:_
     - Use with caution as it deletes the branch forcefully: `git branch -D <branch_to_delete>`

## Cloning a Repository

8. **`git clone`**
   - _Description:_ Creates a copy of a remote repository on your local machine.
   - _How to use:_ Run `git clone <repository_url>` to clone a repository.

## Remote Repository

9. **`git remote -v`**
   - _Description:_ Displays the URLs of the remote repository.
   - _How to use:_ Run `git remote -v` to view the fetch and push URLs of the remote repository.

## Fetching Changes

10. **`git fetch`**
    - _Description:_ Fetches changes from a remote repository to your local repository without merging them.
    - _How to use:_ Run `git fetch` to update your local repository with changes from the remote repository.

## Merging Changes from Remote

11. **`git merge origin/master`**
    - _Description:_ Merges changes from the remote branch `master` into your current local branch.
    - _How to use:_ Ensure you are in the branch where you want to merge changes: `git checkout <your_branch>`
      Run `git merge origin/master` to merge changes from the remote `master` branch.

## Rebasing Changes

12. **`git rebase`**

    - _Description:_ Applies changes from one branch onto another.
    - _How to use:_
      - Ensure you are on the branch where you want to apply changes: `git checkout <your_branch>`
      - Run `git rebase <base_branch>` to rebase your branch onto the specified base branch.
      - Resolve any conflicts if needed.

13. **`git rebase --abort`**
    - _Description:_ Aborts an ongoing rebase operation.
    - _How to use:_ If you encounter issues during rebase and want to cancel it, run `git rebase --abort`.
