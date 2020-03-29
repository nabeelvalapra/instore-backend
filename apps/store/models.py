from django.db import models
from django.contrib.auth import get_user_model

from base.models import BaseDateModel


class Store(BaseDateModel):
    owner = models.OneToOneField(
        get_user_model(),
        verbose_name="Owner",
        on_delete=models.CASCADE)
    name = models.CharField(
        verbose_name="Store Name",
        max_length=40)
    email = models.EmailField()
    logo = models.ImageField(
        upload_to="store/logo"
    )

    def __str__(self):
        return self.name


class Product(BaseDateModel):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    name = models.CharField(
        verbose_name="Product Name",
        max_length=40)

    def __str__(self):
        return self.name