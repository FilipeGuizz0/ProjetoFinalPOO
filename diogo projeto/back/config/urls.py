
from django.contrib import admin
from django.urls import path, include
from teleSaude.views import PacientesViewSet
from rest_framework import routers
from teleSaude.views import AgendamentosViewSet


router = routers.DefaultRouter()
router.register(r'Pacientes',PacientesViewSet)
router.register(r'Agendamentos',AgendamentosViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
