from django.db import models
from django.utils.translation import gettext as _

from base.models import BaseDateModel


class Store(BaseDateModel):
    name = models.CharField(
        verbose_name=_("Store Name"),
        max_length=30
    )
    domain = models.CharField(
        verbose_name=_("Domain Name"),
        unique=True,
        max_length=30
    )
    email = models.EmailField()

    def __str__(self):
        return self.name


class Webdata(BaseDateModel):
    store = models.OneToOneField(
        Store,
        on_delete=models.CASCADE
    )
    logo = models.ImageField(
        upload_to="store/logo",
        null=True, blank=True
    )
    theme_color = models.CharField(
        verbose_name=_("Theme Color Code"),
        max_length=7
    )
    accent_color = models.CharField(
        verbose_name=_("Accent Color Code"),
        max_length=7
    )


class Spotlight(BaseDateModel):
    store = models.ForeignKey(
        Store,
        on_delete=models.CASCADE,
        null=True, blank=True
    )
    image = models.ImageField(
        upload_to="store/spotlights"
    )
    order = models.IntegerField(
        verbose_name=_("Order (Priority: 10-1)"),
        null=True, blank=True,
        default=10
    )

    def __str__(self):
        return "{} - ({})".format(self.store.name, self.image.name)


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
    image = models.ImageField(
        verbose_name=_("Product Images"),
        upload_to="store/product/images"
    )
    caption = models.CharField(
        verbose_name=_("Product Caption"),
        max_length=60,
        null=True, blank=True
    )
    order = models.IntegerField(
        verbose_name=_("Order (Priority: 10-1)"),
        null=True, blank=True,
        default=10
    )
    size = models.CharField(
        verbose_name=_("Size"),
        max_length=20,
        null=True, blank=True
    )
    color = models.CharField(
        verbose_name=_("Color"),
        max_length=20,
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
