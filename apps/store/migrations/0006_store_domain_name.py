# Generated by Django 3.0.4 on 2020-03-29 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_product_store'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='domain_name',
            field=models.CharField(default='localhost', max_length=40, verbose_name='Domain Name'),
            preserve_default=False,
        ),
    ]