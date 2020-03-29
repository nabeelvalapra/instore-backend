from django.contrib import admin
from store.models import Store, Product


class ProductInline(admin.TabularInline):
    model = Product


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    inlines = [ProductInline, ]
