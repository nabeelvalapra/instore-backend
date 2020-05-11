from django.conf import settings
from django.contrib.auth.models import BaseUserManager

from base.validators import validate_mobile_no

from store.models import Store


class InstoreUserManager(BaseUserManager):
    def create_user(self, mobile_no, store, password=None):
        """
        Creates and saves a User with the given mobile number
        and password.
        """
        if not mobile_no:
            raise ValueError('Users must have an mobile number')
        validate_mobile_no(mobile_no)

        username = "{}@{}".format(mobile_no, store.domain)

        user = self.model(
            username=username, store=store, mobile_no=mobile_no
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, mobile_no, username=None, password=None):
        """
        Creates and saves a superuser with the given mobile number
        and password.
        """
        default_store, _ = Store.objects.get_or_create(
            name=settings.SUPERUSER_STORE_NAME,
            domain=settings.SUPERUSER_STORE_DOMAIN,
            email=settings.SUPERUSER_STORE_EMAIL,
            background_color=settings.SUPERUSER_STORE_BG_COLOR,
            button_color=settings.SUPERUSER_STORE_BUTTON_COLOR

        )

        user = self.create_user(
            mobile_no, default_store, password=password
        )
        user.is_superuser = True
        user.is_owner = True
        user.save(using=self._db)
        print("Username: ", user.username)
        return user
