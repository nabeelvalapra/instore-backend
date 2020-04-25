import uuid

from django.contrib.sites.models import Site
from django.contrib.auth.models import BaseUserManager
from base.validators import validate_mobile_no


class InstoreUserManager(BaseUserManager):
    def create_user(self, mobile_no, site, password=None):
        """
        Creates and saves a User with the given mobile number
        and password.
        """
        if not mobile_no:
            raise ValueError('Users must have an mobile number')
        validate_mobile_no(mobile_no)

        username = "{}@{}".format(mobile_no, site.domain)

        user = self.model(
            username=username, site=site, mobile_no=mobile_no
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, mobile_no, username=None, site_id=1, password=None):
        """
        Creates and saves a superuser with the given mobile number
        and password.
        """
        site = Site.objects.get(id=site_id)

        user = self.create_user(
            mobile_no, site, password=password
        )
        user.is_superuser = True
        user.is_owner = True
        user.save(using=self._db)
        return user
