from django.core.exceptions import ValidationError


def validate_mobile_no(number):
    if not (number.isdigit() and len(number) == 10):
        raise ValidationError(
            "Mobile number must be exact 10 digits".format(number)
        )
