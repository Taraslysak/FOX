# Generated by Django 3.1 on 2020-09-22 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0043_auto_20200921_0553'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='location',
            field=models.CharField(default='Whole facility', max_length=255),
        ),
    ]
