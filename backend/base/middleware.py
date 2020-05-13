from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.core.exceptions import SuspiciousOperation

from store.models import Store


class CurrentSiteMiddleware(MiddlewareMixin):
    """
    Middleware that sets `store` attribute to request `Origin`.
    """

    def process_request(self, request):
        header_origin = request.headers.get('Origin', None)
        request_uri = request.get_raw_uri()
        if not header_origin:
            if '/admin/' in request_uri and request.is_secure():
                request.store = get_object_or_404(
                    Store, domain=settings.SUPERUSER_STORE_DOMAIN
                )
            elif settings.DEBUG:
                request.store = get_object_or_404(Store, id=settings.DEBUG_STORE_ID)
            else:
                raise SuspiciousOperation(
                    "Missing Origin Header in Request - {}".format(request_uri)
                )
        else:
            header_origin = header_origin.replace(request.scheme + "://", "")
            request.store = get_object_or_404(Store, domain__exact=header_origin)
