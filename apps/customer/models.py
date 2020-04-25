from django.db import models
from django.contrib.auth import get_user_model

from base.models import BaseDateModel
from store.models import Store


class Customer(BaseDateModel):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    first_name = models.CharField(
        verbose_name="Your Name",
        max_length=30,
        default=""
    )
    address = models.TextField(
        verbose_name="Address",
        default=""
    )
