import uuid

from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

from base.validators import validate_mobile_no


class InstoreUserManager(BaseUserManager):
    def create_user(self, username, mobile_no, password=None, random_username=False):
        """
        Creates and saves a User with the given mobile number
        and password.
        """
        if not mobile_no:
            raise ValueError('Users must have an mobile number')
        validate_mobile_no(mobile_no)

        if random_username:
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
            username,
            mobile_no,
            password=password
        )
        user.is_superuser = True
        user.is_admin = True
        user.save(using=self._db)
        return user


class InstoreUser(AbstractBaseUser):
    username = models.CharField(
        verbose_name="Username", max_length=40, unique=True)
    mobile_no = models.CharField(
        verbose_name="Mobile Number", max_length=10  
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = InstoreUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['mobile_no']

    def __str__(self):
        return self.mobile_no

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
        return self.is_admin

