from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_mobile_no(number):
    if not (number.isdigit() and len(number) == 10):    
        raise ValidationError(
            _('%(number)s must be 10 digits',
            params={'number': number})
        )