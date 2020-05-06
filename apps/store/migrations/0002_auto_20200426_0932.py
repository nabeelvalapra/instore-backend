# Generated by Django 3.0.4 on 2020-04-26 09:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0003_auto_20200426_0932'),
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='owner',
        ),
        migrations.CreateModel(
            name='Purchase',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('address', models.TextField(verbose_name='Shipping Address')),
                ('address_state', models.CharField(max_length=15, verbose_name='State')),
                ('address_city', models.CharField(max_length=15, verbose_name='City')),
                ('address_pincode', models.IntegerField(verbose_name='Pincode')),
                ('amount', models.IntegerField(verbose_name='Transaction Amount')),
                ('status', models.CharField(choices=[('0', 'INITIATED'), ('1', 'SUCCESS'), ('2', 'PENDING'), ('3', 'FAILED')], default='0', max_length=1, verbose_name='Status')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.Customer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.Product')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]