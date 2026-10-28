
from django.http import JsonResponse

def api_status(request):
    return JsonResponse({
        "status": "success",
        "message": "Django backend connected successfully!"
    })
