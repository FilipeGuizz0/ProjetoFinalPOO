from django.contrib import admin
from teleSaude.models import Pacientes
from teleSaude.models import Agendamentos


class Consultas(admin.ModelAdmin):
    list_display = ('id', 'nome', 'idade', 'cpf')
    list_display_links = ('id', 'nome', 'idade', 'cpf')
    search_fields = ('nome', 'id')



class Agendamento(admin.ModelAdmin):
    list_display = ('id', 'nome', 'idade', 'cpf','data','horario','motivo')
    list_display_links = ('id', 'nome', 'idade', 'cpf','data','horario','motivo')
    search_fields = ('nome', 'id')

admin.site.register(Pacientes, Consultas)
admin.site.register(Agendamentos, Agendamento)