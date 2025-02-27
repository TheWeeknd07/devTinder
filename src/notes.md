The default type of request parameters is String.

$ git push --set-upstream origin main
🔹 What This Does:
It pushes your local main branch to the remote main branch.
It sets up tracking so that future git push and git pull commands work without specifying the branch.

res.send() doesn't stop function execution by itself.
If you don’t return after res.send(), code after it will still execute, including next().
Calling next() after res.send() is a problem if another middleware tries to modify the response.

The middleware with a err parameter is only triggered when next(err) is explicitly called by previous route or middleware.