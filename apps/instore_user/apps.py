from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class InstoreUserConfig(AppConfig):
    name = 'instore_user'
    verbose_name = _("Instore User")