from django.db import models

class Pacientes(models.Model):
    nome = models.CharField(max_length=50)
    idade = models.BigIntegerField(max_length=3)
    cpf = models.BigIntegerField(max_length=11)

    def __str__(self):
        return self.nome

class Agendamentos(models.Model):
    nome = models.CharField(max_length=50)
    idade = models.BigIntegerField(max_length=3)
    cpf = models.BigIntegerField(max_length=11)
    data = models.DateField(max_length=10)
    horario = models.TimeField(max_length=5)
    motivo = models.CharField(max_length=50)


    def __str__(self):
        return self.nome

        
