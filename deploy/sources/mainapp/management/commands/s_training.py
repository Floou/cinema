import json
from datetime import datetime

from django.core.management.base import BaseCommand

from mainapp.models import Film


def film_serializer(project):
    result = {k: v
              for k, v in vars(project).items()
              if not k.startswith('_')}
    for k, v in result.items():
        if isinstance(v, datetime):
            result[k] = v.strftime("%Y-%m-%d %H:%M")
    for k, v in result.items():
        if k.endswith('_id'):
            print('foreign', k, v, type(v))

    result = json.dumps(result)
    return result


class Command(BaseCommand):
    def handle(self, *args, **options):
        for project in Film.objects.all():
            p_as_str = film_serializer(project)
            print(type(p_as_str))
            print(p_as_str)
