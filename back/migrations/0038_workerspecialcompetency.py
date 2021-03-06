# Generated by Django 3.1 on 2020-09-13 07:11

import back.models.worker_special_competency
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0037_merge_20200911_0850'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkerSpecialCompetency',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, null=True)),
                ('issued_by', models.CharField(max_length=64, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to=back.models.worker_special_competency.project_docs_path)),
                ('worker', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='special_competencies', to='back.document')),
            ],
        ),
    ]
