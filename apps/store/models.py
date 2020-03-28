from django.db import models
from django.contrib.auth import get_user_model


from base.models import BaseDateModel
from base.validators import validate_mobile_no


class Store(BaseDateModel):
    owner = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=40)
    mobile_no = models.CharField(
        verbose_name="Mobile Number", max_length=10,  
        validators=[validate_mobile_no]
    )
    logo = models.ImageField()

