from django.contrib import admin
from store.models import Store, Product


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
