from rest_framework import serializers
from teleSaude.models import Pacientes
from teleSaude.models import Agendamentos

class PacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pacientes
        fields = ('id', 'nome', 'idade', 'cpf')

class AgendamentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agendamentos
        fields = ('id', 'nome', 'idade', 'cpf','data', 'horario', 'motivo')
   