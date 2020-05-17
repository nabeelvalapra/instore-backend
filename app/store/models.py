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

    def __str__(self):
        return "{}".format(self.store.name)


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


class Tag(BaseDateModel):
    store = models.ForeignKey(
        Store,
        on_delete=models.CASCADE,
        related_name='tags'
    )
    name = models.CharField(
        verbose_name=_("Tag Name"),
        max_length=12
    )
    slug = models.SlugField(
        verbose_name=_('Tag Slug'),
    )
    order = models.IntegerField(
        verbose_name=_("Order"),
    )

    def __str__(self):
        return "{} - {}".format(self.store.name, self.name)

    class Meta:
        unique_together = (
            'store', 'slug'
        )
