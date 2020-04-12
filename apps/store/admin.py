from django.contrib import admin
from store.models import Store, Product, ProductImages


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
        return False


class ProudctImageInline(admin.StackedInline):
    model = ProductImages


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProudctImageInline,
    ]
