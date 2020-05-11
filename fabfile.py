from fabric import task


backend_host = ["instore-backend"]


@task(hosts=backend_host)
def deploy_backend(c):
    c.run("cd instore && git reset --hard origin/master")
    c.run("cd instore && git pull origin master")
    c.run("cd instore && /home/admin/venv/instore/bin/python3 manage.py migrate")
    c.run("sudo service supervisor restart && sudo service nginx restart", pty=True)


@task(hosts=backend_host)
def deploy_frontend(c):
    c.run("cd instore && git reset --hard origin/master")
    c.run("cd instore && git pull origin master")
    c.run("cd instore/frontend/ && npm run build")
    c.run("mv instore/frontend/build /home/admin/frontend-build")
