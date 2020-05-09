# Generated by Django 3.0.4 on 2020-05-08 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0007_auto_20200508_0726'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.SlugField(blank=True, null=True, verbose_name='Slug'),
        ),
        migrations.AlterUniqueTogether(
            name='product',
            unique_together={('store', 'slug')},
        ),
    ]