from django.db import models
from django.contrib.sites.models import Site
from django.utils.translation import gettext as _

from base.models import BaseDateModel


class Store(BaseDateModel):
    site = models.OneToOneField(
        Site,
        on_delete=models.CASCADE
    )
    email = models.EmailField()
    logo = models.ImageField(
        upload_to="store/logo"
    )

    def __str__(self):
        return self.site.name


class Spotlight(BaseDateModel):
    order = models.IntegerField(
        verbose_name=_("Order Number"),
    )
    image = models.ImageField(
        upload_to="store/spotlights"
    )
    product = models.ForeignKey(
        "store.Product",
        on_delete=models.CASCADE,
        null=True, blank=True
    )


class Category(BaseDateModel):
    name = models.CharField(
        verbose_name=_("Categroy Name"),
        max_length=15
    )

    def __str__(self):
        return self.name


class Tag(BaseDateModel):
    name = models.CharField(
        verbose_name=_("Tag Name"),
        max_length=25
    )

    def __str__(self):
        return self.name


class Product(BaseDateModel):

    class AvailabilityChoices(models.TextChoices):
        OUT_OF_STOCK = 0, _("Out of Stock")
        AVAILABLE = 1, _("Available")
        FAST_MOVING = 2, _("Fast Moving")

    store = models.ForeignKey(
        Store,
        on_delete=models.CASCADE
    )
    price = models.IntegerField(
        verbose_name=_("Price"),
        default=0
    )
    name = models.CharField(
        verbose_name=_("Product Name"),
        max_length=40
    )
    description = models.TextField(
        verbose_name=_("Product Description"),
        null=True, blank=True
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        null=True, blank=True
    )
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
        null=True, blank=True
    )
    availability = models.CharField(
        verbose_name=_("Availability Status"),
        max_length=1,
        choices=AvailabilityChoices.choices,
        default=AvailabilityChoices.AVAILABLE
    )

    def __str__(self):
        return self.name


class ProductImage(BaseDateModel):
    product = models.ForeignKey(
        Product,
        related_name="product_images",
        on_delete=models.CASCADE
    )
    order = models.IntegerField(default=0)
    image = models.ImageField(
        verbose_name=_("Product Images"),
        upload_to="store/product/images"
    )

