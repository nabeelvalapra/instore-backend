# Generated by Django 3.0.4 on 2020-05-08 07:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_auto_20200507_0823'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='tag',
        ),
        migrations.DeleteModel(
            name='Tag',
        ),
    ]