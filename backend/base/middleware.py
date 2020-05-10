from django.utils.deprecation import MiddlewareMixin
from django.shortcuts import get_object_or_404
from django.core.exceptions import SuspiciousOperation
from django.contrib.sites.models import Site


class CurrentSiteMiddleware(MiddlewareMixin):
    """
    Middleware that sets `site` attribute to request `Origin`.
    """

    def process_request(self, request):
        header_origin = request.headers.get('Origin', None)
        if not header_origin:
            raise SuspiciousOperation("Missing Origin Header in Request")
        request.site = get_object_or_404(Site, domain__exact=header_origin)
