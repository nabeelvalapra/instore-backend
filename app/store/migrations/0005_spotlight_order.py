# Generated by Django 3.0.4 on 2020-05-17 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_auto_20200517_0632'),
    ]

    operations = [
        migrations.AddField(
            model_name='spotlight',
            name='order',
            field=models.IntegerField(blank=True, default=10, null=True, verbose_name='Order (Priority: 10-1)'),
        ),
    ]