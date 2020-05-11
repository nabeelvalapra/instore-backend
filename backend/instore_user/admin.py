from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from instore_user.models import InstoreUser, OneTimePassword
from instore_user.forms import UserChangeForm, UserCreationForm

from rest_framework.authtoken.admin import TokenAdmin


class InstoreUserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('id', 'username', 'store', 'mobile_no', 'is_owner', 'is_superuser')
    list_filter = ('is_owner', 'is_superuser')
    fieldsets = (
        ('Basic Info', {'fields': ('mobile_no', 'password')}),
        ('Permissions', {'fields': ('is_owner', 'is_superuser')}),

    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('mobile_no', 'store', 'password1', 'password2'),
        }),
    )
    search_fields = ('mobile_no',)
    ordering = ('mobile_no',)
    filter_horizontal = ()

    def has_module_permission(self, request):
        if request.user.is_superuser:
            return True
        return False


# Now register the new UserAdmin...
admin.site.register(InstoreUser, InstoreUserAdmin)
# Since we're not using Django's built-in permissions,
# unregister the Group model from admin.
admin.site.unregister(Group)

# Register OTPData
@admin.register(OneTimePassword)
class OTPAdmin(admin.ModelAdmin):
    list_display = ('user', 'password')


# Patch the TokenAdmin module permission, so only
# superusers have permission to view in the Admin Dashboard.
def auth_token_module_permission(self, request):
    if request.user.is_superuser:
        return True
    return False


TokenAdmin.has_module_permission = auth_token_module_permission
