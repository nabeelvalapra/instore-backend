# Generated by Django 3.0.4 on 2020-05-10 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0008_auto_20200508_0840'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='background_color',
            field=models.CharField(default='#ffffff', max_length=7, verbose_name='Background Color'),
            preserve_default=False,
        ),
    ]
