from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from back.models import Document, Project
from back.serializers import DocumentSerializer, DocumentListSerializer
from back.logger import log


class DocumentList(generics.ListAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentListSerializer

    def get_queryset(self):
        project_id = self.request.query_params.get("project_id", None)
        if not project_id:
            log(log.ERROR, "Project id is absent")
            return []
        project = Project.objects.get(pk=project_id)

        return Document.objects.filter(project=project)


class DocumentCreate(generics.CreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class DocumentDownload(APIView):
    def get(self, request, pk, format=None):
        document = Document.objects.get(pk=pk)
        document.file.open("rb")
        response = HttpResponse(
            document.file.read(), content_type="application/octet-stream"
        )
        response["Content-Disposition"] = f"attachment; filename={document.file.name}"
        return response