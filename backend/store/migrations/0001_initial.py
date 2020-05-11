# Generated by Django 3.0.4 on 2020-05-11 08:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Spotlight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('order', models.IntegerField(verbose_name='Order Number')),
                ('image', models.ImageField(upload_to='store/spotlights')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=30, verbose_name='Store Name')),
                ('domain', models.CharField(max_length=30, unique=True, verbose_name='Domain Name')),
                ('email', models.EmailField(max_length=254)),
                ('logo', models.ImageField(blank=True, null=True, upload_to='store/logo')),
                ('background_color', models.CharField(max_length=7, verbose_name='Background Color')),
                ('button_color', models.CharField(max_length=7, verbose_name='Button Color')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('price', models.IntegerField(default=0, verbose_name='Price')),
                ('name', models.CharField(max_length=40, verbose_name='Product Name')),
                ('slug', models.SlugField(blank=True, null=True, verbose_name='Slug')),
                ('image', models.ImageField(upload_to='store/product/images', verbose_name='Product Images')),
                ('caption', models.CharField(blank=True, max_length=60, null=True, verbose_name='Product Caption')),
                ('size', models.CharField(max_length=20, verbose_name='Size')),
                ('color', models.CharField(max_length=20, verbose_name='Color')),
                ('tag', models.CharField(choices=[('popular', 'Popular'), ('new_arrivals', 'New Arrivals'), ('deals', 'Deals')], default='popular', max_length=15, verbose_name='Tag')),
                ('availability', models.CharField(choices=[('0', 'Out of Stock'), ('1', 'Available'), ('2', 'Fast Moving')], default='1', max_length=1, verbose_name='Availability Status')),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.Store')),
            ],
            options={
                'unique_together': {('store', 'slug')},
            },
        ),
    ]