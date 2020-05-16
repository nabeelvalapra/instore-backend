from django.contrib import admin

from store.models import Store, Product, Spotlight


class ProductInline(admin.TabularInline):
    model = Product


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    inlines = [ProductInline, ]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)

    def has_add_permission(self, request):
        if request.user.is_superuser:
            return True
        return False


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Spotlight)
class SpotlightAdmin(admin.ModelAdmin):
    pass
