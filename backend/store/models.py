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


class Product(BaseDateModel):

    class AvailabilityChoices(models.TextChoices):
        OUT_OF_STOCK = 0, _("Out of Stock")
        AVAILABLE = 1, _("Available")
        FAST_MOVING = 2, _("Fast Moving")

    class TagChoices(models.TextChoices):
        POPULAR = "popular", _("Popular")
        NEW_ARRIVALS = "new_arrivals", _("New Arrivals")
        DEALS = "deals", _("Deals")

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
    slug = models.SlugField(
        verbose_name=_("Slug"),
        null=True, blank=True
    )
    description = models.TextField(
        verbose_name=_("Product Description"),
        null=True, blank=True
    )
    tag = models.CharField(
        verbose_name=_("Tag"),
        max_length=15,
        choices=TagChoices.choices,
        default=TagChoices.POPULAR
    )
    availability = models.CharField(
        verbose_name=_("Availability Status"),
        max_length=1,
        choices=AvailabilityChoices.choices,
        default=AvailabilityChoices.AVAILABLE
    )

    def __str__(self):
        return self.name

    class Meta:
        unique_together = (
            'store', 'slug'
        )


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
