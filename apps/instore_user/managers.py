import uuid

from django.contrib.auth.models import BaseUserManager
from base.validators import validate_mobile_no


class InstoreUserManager(BaseUserManager):
    def create_user(self, mobile_no, username=None, password=None):
        """
        Creates and saves a User with the given mobile number
        and password.
        """
        if not mobile_no:
            raise ValueError('Users must have an mobile number')
        validate_mobile_no(mobile_no)

        if not username:
            username = str(uuid.uuid4())

        user = self.model(
            username=username,
            mobile_no=mobile_no
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, mobile_no, password=None):
        """
        Creates and saves a superuser with the given mobile number
        and password.
        """
        user = self.create_user(
            mobile_no,
            username,
            password=password
        )
        user.is_superuser = True
        user.is_owner = True
        user.save(using=self._db)
        return user
