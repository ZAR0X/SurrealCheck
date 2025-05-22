from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def verify_content(request):
    data = request.data
    image_url = data.get('image_url', '')

    mock_response = {
        "input_url": image_url,
        "original": True,
        "confidence": 92.7,
        "source": "https://original-creator.site/artwork",
        "creator": "John Doe",
        "verified_by": "Yakoa",
        "story": {
            "license_link": f"https://story.yakoa.com/license?id=123456",
            "extend_link": f"https://story.yakoa.com/extend?id=123456"
        }
    }

    return Response(mock_response)

@api_view(['POST'])
def license_content(request):
    data = request.data
    image_url = data.get('image_url', '')
    
    fake_license_link = f"https://story.yakoa.com/license?id=FAKE_{hash(image_url)}"
    
    return Response({
        "status": "licensed",
        "license_link": fake_license_link
    })
