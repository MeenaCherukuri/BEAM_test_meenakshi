import os
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings

class FrontendAppView(View):
    def get(self, request):
        try:
            with open(os.path.join(settings.BASE_DIR.parent, 'frontend', 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse(
                "React build not found. Run 'npm run build' inside the frontend folder.",
                status=501,
            )
