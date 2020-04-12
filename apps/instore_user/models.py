import uuid

from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

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


class InstoreUser(AbstractBaseUser):
    username = models.CharField(
        verbose_name="Username", max_length=40, unique=True)
    mobile_no = models.CharField(
        verbose_name="Mobile Number", max_length=10
    )
    is_active = models.BooleanField(default=True)
    is_owner = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = InstoreUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['mobile_no']

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
