from django.urls import re_path
from BEAM_app.views import FrontendAppView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'^(?:.*)/?$', FrontendAppView.as_view(), name='home'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
