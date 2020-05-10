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
        if not header_origin:
            if '/admin/' in request_uri and settings.REQUEST_SCHEMA in request_uri:
                request.site = get_object_or_404(Site, id=1)
            else:
                raise SuspiciousOperation("Missing Origin Header in Request")
        else:
            header_origin = header_origin.replace(settings.REQUEST_SCHEMA, "")
            request.site = get_object_or_404(Site, domain__exact=header_origin)
