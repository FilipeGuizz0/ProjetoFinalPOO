from rest_framework import viewsets
from teleSaude.models import Pacientes
from teleSaude.serealizer import PacientesSerializer
from teleSaude.models import Agendamentos
from teleSaude.serealizer import AgendamentosSerializer
from rest_framework.response import Response

class PacientesViewSet(viewsets.ModelViewSet):
    queryset = Pacientes.objects.all() 
    serializer_class = PacientesSerializer

class AgendamentosViewSet(viewsets.ModelViewSet):
    queryset = Agendamentos.objects.all() 
    serializer_class = AgendamentosSerializer

    def create(self, request, *args, **kwargs):
        data = request.data

        # Verifica se já existe um agendamento com a mesma data e horário
        agendamentos_existentes = Agendamentos.objects.filter(data=data.get('data'), horario=data.get('horario'))
        if agendamentos_existentes.exists():
            return Response({'detail': 'Já existe um agendamento para essa data e horário.'}, status=400)
        #se ja existir, manda uma resposta de erro com status 400 junto com uma mensagem 

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)

