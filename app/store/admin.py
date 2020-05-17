from django.contrib import admin

from store.models import Store, Spotlight, Webdata, Tag
from product.models import FashionProduct


class ProductInline(admin.TabularInline):
    model = FashionProduct


class WebdataInline(admin.StackedInline):
    model = Webdata


class TagInline(admin.TabularInline):
    model = Tag


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    inlines = [WebdataInline, TagInline, ProductInline]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)

    def has_add_permission(self, request):
        if request.user.is_superuser:
            return True
        return False


@admin.register(Spotlight)
class SpotlightAdmin(admin.ModelAdmin):
    pass
