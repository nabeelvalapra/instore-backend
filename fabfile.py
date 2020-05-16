from fabric import task


backend_host = ["instore-backend"]


@task(hosts=backend_host)
def deploy_backend(c):
    c.run("cd instore-backend && git reset --hard origin/master")
    c.run("cd instore-backend && git pull origin master")
    c.run("cd instore-backend && /home/admin/venv/instore/bin/python3 manage.py migrate")
    c.run("sudo service supervisor restart && sudo service nginx restart", pty=True)


@task(hosts=backend_host)
def deploy_frontend(c):
    c.run("cd instore-frontend && git reset --hard origin/master")
    c.run("cd instore-frontend && git pull origin master")
    c.run("cd instore-frontend && npm install && npm run build")
