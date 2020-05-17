from django.db import models
from django.utils.translation import gettext as _

from base.models import BaseDateModel

from store.models import Store, Tag


class FashionProduct(BaseDateModel):

    class AvailabilityChoices(models.TextChoices):
        OUT_OF_STOCK = 0, _("Out of Stock")
        AVAILABLE = 1, _("Available")
        FAST_MOVING = 2, _("Fast Moving")

    store = models.ForeignKey(
        Store,
        on_delete=models.CASCADE
    )
    tag = models.ForeignKey(
        Tag,
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
    availability = models.CharField(
        verbose_name=_("Availability Status"),
        max_length=1,
        choices=AvailabilityChoices.choices,
        default=AvailabilityChoices.AVAILABLE
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Fashion Product')
        unique_together = (
            'store', 'slug'
        )
