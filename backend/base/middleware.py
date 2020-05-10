from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.core.exceptions import SuspiciousOperation
from django.contrib.sites.models import Site


class CurrentSiteMiddleware(MiddlewareMixin):
    """
    Middleware that sets `site` attribute to request `Origin`.
    """

    def process_request(self, request):
        header_origin = request.headers.get('Origin', None)
        request_uri = request.get_raw_uri()
        if all(key in request_uri for key in ['/admin/', settings.REQUEST_SCHEMA]):
            request.site = get_object_or_404(Site, id=1)
        elif not header_origin:
            raise SuspiciousOperation("Missing Origin Header in Request")
        else:
            header_origin = header_origin.replace(settings.REQUEST_SCHEMA, "")
            request.site = get_object_or_404(Site, domain__exact=header_origin)
