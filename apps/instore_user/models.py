import uuid
import pytz

from datetime import datetime, timedelta

from django.contrib.sites.models import Site
from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from instore_user.managers import InstoreUserManager


class InstoreUser(AbstractBaseUser):
    username = models.CharField(
        verbose_name="Username", max_length=40, unique=True)
    mobile_no = models.CharField(
        verbose_name="Mobile Number", max_length=10
    )
    site = models.ForeignKey(
        Site,
        on_delete=models.CASCADE
    )
    is_active = models.BooleanField(default=True)
    is_owner = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = InstoreUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['mobile_no']

    class Meta:
        unique_together = ('mobile_no', 'site',)

    def __str__(self):
        try:
            uuid.UUID(self.username)
            return self.mobile_no
        except ValueError:
            return "{} ({})".format(self.mobile_no, self.username)

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_owner


class OTPData(models.Model):
    user = models.ForeignKey(
        InstoreUser,
        on_delete=models.CASCADE
    )
    otp = models.IntegerField(
        verbose_name="OTP"
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    @property
    def expiry_datetime(self):
        return self.created_at + timedelta(minutes=20)

    def has_expired(self):
        curr_time = datetime.now(pytz.utc)
        if curr_time > self.expiry_datetime:
            return True
        return False
