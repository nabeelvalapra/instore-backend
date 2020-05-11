from fabric import task


backend_host = ["instore-backend"]


@task(hosts=backend_host)
def deploy_backend(c):
    c.run("cd instore && git reset --hard origin/master")
    c.run("cd instore && git pull origin master")
    c.run("cd instore && /home/admin/venv/instore/bin/python3 manage.py migrate")
