from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext as _

from base.models import BaseDateModel

from store.models import Product


class Customer(BaseDateModel):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    first_name = models.CharField(
        verbose_name="Your Name",
        max_length=30,
        default=None,
        null=True, blank=True
    )
    email = models.EmailField(
        verbose_name="Email Address",
        default=None,
        null=True, blank=True
    )


class Purchase(BaseDateModel):

    class PaymentStatusChoices(models.TextChoices):
        INITIATED = 0, _("INITIATED")
        SUCCESS = 1, _("SUCCESS")
        PENDING = 2, _("PENDING")
        FAILED = 3, _("FAILED")

    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )
    address = models.TextField(
        verbose_name=_("Shipping Address"),
    )
    address_state = models.CharField(
        verbose_name=_("State"),
        max_length=15
    )
    address_city = models.CharField(
        verbose_name=_("City"),
        max_length=15
    )
    address_pincode = models.IntegerField(
        verbose_name=_("Pincode")
    )
    amount = models.IntegerField(
        verbose_name=_("Transaction Amount")
    )
    status = models.CharField(
        verbose_name=_("Status"),
        max_length=1,
        choices=PaymentStatusChoices.choices,
        default=PaymentStatusChoices.INITIATED
    )
